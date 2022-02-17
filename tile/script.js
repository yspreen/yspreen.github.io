var grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

var saveTimeout = null;
var isInitial = true;

function delayedSave() {
  if (saveTimeout === null) {
    saveTimeout = setTimeout(function() {
      saveTimeout = null;
      console.log(isInitial);
      if (!isInitial)
      Cookies.set("grid", grid);
      isInitial = true;
    }, 5000);
  }
}

function main() {
  for (let i = 0; i < 10; i++) {
    $(".win").append('<div class="text">You won!</div>');
  }
  $("[data-toggle=confirmation]").confirmation({
    rootSelector: "[data-toggle=confirmation]"
    // other options
  });
  $(".btn.reset").click(function() {
    Cookies.remove("grid");
    window.location.href = window.location.href;
  });

  let wasLoaded = false;
  if (Cookies.get("grid") !== undefined) {
    loadGrid();
    makeGrid();
    wasLoaded = true;
  }

  $(".tile").each(function(i_) {
    let $t = $(this),
      posH = 0,
      posW = 0,
      i = i_ + 1;

    if (!wasLoaded) {
      $t.attr("data-id", i);
      for (let j = 0; j < 5; j++) {
        if ($t.hasClass("pos-w-" + j)) posW = j;
        if ($t.hasClass("pos-h-" + j)) posH = j;
      }
      grid[posH][posW] = i;
      if ($t.hasClass("tall")) {
        grid[posH + 1][posW] = i;
      }
      if ($t.hasClass("wide")) {
        grid[posH][posW + 1] = i;
        if ($t.hasClass("tall")) {
          grid[posH + 1][posW + 1] = i;
        }
      }

      $t.removeClass("pos-w-" + posW);
      $t.removeClass("pos-h-" + posH);
      $t.css("top", posH * 20 + "%");
      $t.css("left", posW * 25 + "%");
    } else {
      setPosition($t, getPos(i)[0]);
    }

    $t.append('<div class="inner-wr"><div class="inner"><div class="dot">');
    dragElement($t);
  });
  $(".tile.wide.tall .inner-wr").append('<div class="arrow">');
  for (let i = 0; i < 5; i++) {
    $(".grid .lines").append('<div class="h-line h-line-' + i + '">');
    $(".grid .lines").append('<div class="v-line v-line-' + i + '">');
  }
  $(".grid .lines").append('<div class="h-line h-line-5">');

  resizeContents();
}

function loadGrid() {
  grid = Cookies.getJSON("grid");
}

function makeGrid() {
  $(".tile").remove();

  let obj = [];
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) {
      let k = grid[i][j];
      if (obj[k] === undefined) {
        obj[k] = [i, j, 0, false];
      }
      obj[k][2]++;
      if (i > obj[k][0]) obj[k][3] = true;
    }
  for (let i = 1; i < obj.length; i++) {
    let o = obj[i],
      classes = "";
    if (o[2] >= 4) {
      classes = "tall wide";
    } else if (o[3]) {
      classes = "tall";
    } else if (o[2] >= 2) {
      classes = "wide";
    }
    $(".grid").append('<div class="tile ' + classes + '" data-id="' + i + '">');
  }
}

function getPos(k) {
  let pos = [];
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == k) pos.push([i, j]);
    }
  return pos;
}

function getDir(k) {
  var pos = getPos(k),
    dirs = ["u", "d", "l", "r"],
    val = [];
  dirs.forEach(function(dir) {
    val.push(dir);
    var brk = false;
    pos.forEach(function(p) {
      if (brk) return;
      p = shift(p, dir);
      if (p[0] < 0 || p[0] > 4 || p[1] < 0 || p[1] > 3) {
        if (pos.length == 4 && p[0] > 4) {
          pos.forEach(function(p) {
            if (p[1] < 1 || p[1] > 2) brk = true;
          });
          if (!brk) {
            brk = true;
            val.pop();
            return victory();
          }
        }
        brk = true;
        return val.pop();
      }
      if (grid[p[0]][p[1]] !== 0 && grid[p[0]][p[1]] !== k) {
        brk = true;
        return val.pop();
      }
    });
  });

  return val;
}

function shift(pos, dir) {
  pos = [pos[0], pos[1]];
  switch (dir) {
    case "u":
      pos[0] -= 1;
      return pos;
    case "d":
      pos[0] += 1;
      return pos;
    case "l":
      pos[1] -= 1;
      return pos;
    case "r":
      pos[1] += 1;
      return pos;
  }
  return pos;
}

function victory() {
  $(".tile").addClass("fadeout");
  $(".win-wr").addClass("show");
}

function moveInGrid($t, dir) {
  isInitial = false;
  var k = ~~$t.attr("data-id"),
    pos = getPos(k);
  pos.forEach(function(p) {
    grid[p[0]][p[1]] = 0;
  });
  pos.forEach(function(p) {
    p = shift(p, dir);
    grid[p[0]][p[1]] = k;
  });
}

function setPosition($t, pos) {
  if (pos === undefined) {
    var k = ~~$t.attr("data-id"),
      pos = getPos(k);

    pos = pos[0];
  }

  $t.css("top", pos[0] * 20 + "%");
  $t.css("left", pos[1] * 25 + "%");

  delayedSave();
}

function resizeContents() {
  let s = Math.min($(window).height() / 5, $(window).width() / 4) * 5;
  s *= 0.8;

  $(".body").css("width", s / 5 * 4 + "px");
  $(".body").css("height", s + "px");
  $("body").css("font-size", s / 10 + "px");
}

window.onresize = function(_) {
  resizeContents();
};

$(main);

function touchWrap(func) {
  return function(e) {
    if (func(e.targetTouches[0], $(this))) {
      return true;
    } else {
      e.preventDefault();
    }
  };
}

var $dragEl = null;

$("body").on("mouseup", endDrag);
$("body").on("mousemove", continueDrag);
$("body").on("touchend", touchWrap(endDrag));
$("body").on("touchmove", touchWrap(continueDrag));

function dragElement($e) {
  $e.on("mousedown", startDrag);
  $e.on("touchstart", touchWrap(startDrag));
}

function getTileSize() {
  return $(".tile.wide.tall").width() / 2;
}

function startDrag(e, $t) {
  var $t = $t || $(this);
  e = e || window.event;
  try {
    e.preventDefault();
  } catch (err) {}
  // get the mouse cursor position at startup:
  $t.dragPos = [e.clientX, e.clientY];
  $t.dragDir = getDir(~~$t.attr("data-id"));
  $t.dragOffset = [0, 0];
  $t.tileSize = getTileSize();
  $dragEl = $t;
}

function continueDrag(e) {
  if ($dragEl == null) {
    return true;
  }
  e = e || window.event;
  try {
    e.preventDefault();
  } catch (err) {}

  var pos1 = e.clientX - $dragEl.dragPos[0],
    pos2 = e.clientY - $dragEl.dragPos[1],
    moved = true;

  pos1 -= $dragEl.tileSize * $dragEl.dragOffset[0];
  pos2 -= $dragEl.tileSize * $dragEl.dragOffset[1];

  pos1 = Math.min(pos1, $dragEl.dragDir.includes("r") ? $dragEl.tileSize : 0);
  pos1 = Math.max(pos1, $dragEl.dragDir.includes("l") ? -$dragEl.tileSize : 0);
  pos2 = Math.min(pos2, $dragEl.dragDir.includes("d") ? $dragEl.tileSize : 0);
  pos2 = Math.max(pos2, $dragEl.dragDir.includes("u") ? -$dragEl.tileSize : 0);

  if (pos1 > $dragEl.tileSize / 2) {
    moveInGrid($dragEl, "r");
    $dragEl.dragOffset[0] += 1;
  } else if (pos1 < -$dragEl.tileSize / 2) {
    moveInGrid($dragEl, "l");
    $dragEl.dragOffset[0] -= 1;
  } else if (pos2 > $dragEl.tileSize / 2) {
    moveInGrid($dragEl, "d");
    $dragEl.dragOffset[1] += 1;
  } else if (pos2 < -$dragEl.tileSize / 2) {
    moveInGrid($dragEl, "u");
    $dragEl.dragOffset[1] -= 1;
  } else {
    moved = false;
  }
  if (moved) {
    $dragEl.dragDir = getDir(~~$dragEl.attr("data-id"));
    return continueDrag(e);
  }
  pos1 += $dragEl.tileSize * $dragEl.dragOffset[0];
  pos2 += $dragEl.tileSize * $dragEl.dragOffset[1];
  $dragEl.dragDisplayPos = [pos1, pos2];

  $dragEl.css(
    "transform",
    "translateX(" + pos1 + "px) translateY(" + pos2 + "px)"
  );
}

function endDrag(e) {
  if ($dragEl == null) {
    return true;
  }
  e = e || window.event;
  try {
    e.preventDefault();
  } catch (err) {}

  var pos1 = $dragEl.dragDisplayPos[0],
    pos2 = $dragEl.dragDisplayPos[1];
  $dragEl.addClass("no-anim");
  pos1 += parseFloat($dragEl.css("left"));
  pos2 += parseFloat($dragEl.css("top"));
  $dragEl.css("transform", "initial");
  $dragEl.css("left", pos1 + "px");
  $dragEl.css("top", pos2 + "px");
  void $dragEl[0].offsetWidth;
  $dragEl.removeClass("no-anim");
  setPosition($dragEl);
  $dragEl = null;
}