function test1() {
    // var colors = ["red", "green", "blue"]
    // alert(colors)
    // colors.shift()
    // alert(colors)

    let a = 3.14;
    alert(a);
    a = 3;
    alert(a);
}

function area_of_circle(r, pi) {
    if (arguments.length !== 2) {
        pi = 3.14;
    }
    alert(r * r * pi)
}

function sum(...rest) {
    var total = 0;
    for (var i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    alert(total);
}

function product(arr) {
    alert(arr.reduce((x, y) => x * y));
    // var arr = [1, 3, 5, 7, 9];
    // arr.reduce(function (x, y) {
    //     return(x + y);
    // });
}

function int2String(arr) {
    alert(arr.map((x) => x + "")
        .reduce((x, y) => x + y)
        .toString())
}

function String2int(arr) {
    var array = arr.split("");
    alert(array.map((x) => +x)
        .reduce((x, y) => x * 10 + y))

}

function test(arr) {
    alert(arr.map(x => x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase()));
}

function qukong(arr) {
    alert(arr.filter(function (s) {
        return s && s.trim();
    }));
}

function quchong(arr) {
    alert(arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    }))
}

function paixu(arr) {
    const arrr = arr.sort();
    alert(arrr);
    alert(arr.sort(function (s1, s2) {
        let x1 = s1.toUpperCase();
        let x2 = s2.toUpperCase();
        if (x1 < x2) {
            return -1;
        }
        if (x1 > x2) {
            return 1;
        }
        return 0;
    }))
}

function fib(max) {
    let t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    alert(arr);
}

function changeDOM(a) {
    if (a === 1) {
        const dom = document.getElementById('dom-test');
        // dom.innerHTML = 'ABC'
        dom.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
    } else {
        const dom = document.getElementById('dom-test');
        dom.style.color = 'blue'
    }
}

function addDOM() {
    var list = document.getElementById('div-explore');
    var haskell = document.createElement('button');
    haskell.id = 'haskell';
    haskell.innerText = 'Haskell';
    list.appendChild(haskell)

}

function addDOMchangeStyle() {
    var d = document.createElement('style');
    d.setAttribute('type', 'text/css');
    d.innerHTML = 'button { background: red }';
    document.getElementsByTagName('head')[0].appendChild(d);
}


function deleteDom() {
    var list = document.getElementById('div-explore');
    var deleted = document.getElementById('haskell');
    list.removeChild(deleted);
}


