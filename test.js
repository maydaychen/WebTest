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

