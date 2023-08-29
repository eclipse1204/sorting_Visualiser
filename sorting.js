let arr = [];
for (var i = 0; i < 100; i++)
{
    var num = Math.floor((Math.random() * 500)) + 1;
    arr.push(num);
}

function random_values()
{
    for (var i = 0; i < arr.length; i++)
    {
        var num = Math.floor((Math.random() * 500)) + 1;
        arr[i]=num;
    }
}

function begin() {
    var div_region = document.querySelector(".div_region");
    for (var i = 0; i < arr.length; i++) {
        var div = document.createElement('div');
        div.className = "box col";
        div.style.height = arr[i]+"px";
        div_region.appendChild(div);
    }
}

function change() {
    random_values();
    var div = document.querySelectorAll(".box");
    for (var i = 0; i < arr.length; i++) {
        div[i].style.height = arr[i]+"px";
    }
}


const wait = (msec) => new Promise((resolve, _) => {
    setTimeout(resolve, msec)
});

async function bubble_sort()
{
    var x = document.querySelectorAll(".btn");
    for (var i = 0; i < x.length; i++){
        x[i].disabled = true;
    }
    var div = document.querySelectorAll(".box");
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            div[j].style.backgroundColor = "red";
            div[j + 1].style.backgroundColor = "red";
            if (arr[j] > arr[j + 1]) {
                await wait(2);
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                div[j].style.height = arr[j] + "px";
                div[j + 1].style.height = arr[j + 1] + "px";
            }
            div[j].style.backgroundColor = "black";
            div[j + 1].style.backgroundColor = "black";
        }
    }
    for (var i = 0; i < x.length; i++){
        x[i].disabled = false;
    }
}


async function selection_sort()
{
    var x = document.querySelectorAll(".btn");
    for (var i = 0; i < x.length; i++){
        x[i].disabled = true;
    }
    var div = document.querySelectorAll(".box");
    for (var i = 0; i < arr.length - 1; i++) {
        var min_index = i;
        for (var j = i+1; j < arr.length; j++) {
            div[min_index].style.backgroundColor = "red";
            div[j].style.backgroundColor = "red";
            var y = min_index;
            await wait(2);
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
            div[j].style.backgroundColor = "black";
            div[y].style.backgroundColor = "black";
        }
        var temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
        div[i].style.height = arr[i] + "px";
        div[min_index].style.height = arr[min_index] + "px";
    }
    for (var i = 0; i < x.length; i++){
        x[i].disabled = false;
    }
}

async function insertion_sort()
{
    var x = document.querySelectorAll(".btn");
    for (var i = 0; i < x.length; i++){
        x[i].disabled = true;
    }
    var div = document.querySelectorAll(".box");
    var i;
    var j;
    var key;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            div[j].style.backgroundColor = "red";
            div[j + 1].style.backgroundColor = "red";
            await wait(2);
            arr[j + 1] = arr[j];
            div[j+1].style.height = arr[j+1] + "px";
            div[j].style.backgroundColor = "black";
            div[j + 1].style.backgroundColor = "black";
            j = j - 1;
        }
        arr[j + 1] = key;
        div[j+1].style.height = arr[j+1] + "px";
    }
    for (var i = 0; i < x.length; i++){
        x[i].disabled = false;
    }
}

async function helper_merge(l,m,r) {
    var div = document.querySelectorAll(".box");
    var i = l;
    var j = m+1;
    var new_arr = [];
    while (i <= m && j <= r) {
        if (arr[i] < arr[j]) {
            div[i].style.backgroundColor = "red";
            div[j].style.backgroundColor = "red";
            await wait(20);
            new_arr.push(arr[i]);
            div[i].style.backgroundColor = "black";
            div[j].style.backgroundColor = "black";
            i++;
        }
        else {
            new_arr.push(arr[j]);
            j++;
        }
    }
 
    while (i <= m) {
        new_arr.push(arr[i]);
        i++;
    }

    while (j <= r) {
        new_arr.push(arr[j]);
        j++;
    }
    var k = 0;
    for (var i = l; i <= r; i++){
        arr[i] = new_arr[k];
        div[i].style.height = arr[i] + "px";
        k++;
    }
}

async function merge(l, m, r)
{
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(helper_merge(l, m, r));
        }
    });
}

async function mergeSort_helper(l, r) {
    if(l>=r){
        return;
    }
    var m = Math.floor((l + r) / 2);
    await mergeSort(l,m);
    await mergeSort(m+1,r);
    await merge(l,m,r);
}

async function mergeSort(l, r) {
    return new Promise(async (resolve, reject) => {
        if (true) {
            resolve(mergeSort_helper(l, r));
        }
    });
}

async function merge_sort() {
    var div = document.querySelectorAll(".box");
    var x = document.querySelectorAll(".btn");
    for (var i = 0; i < x.length; i++){
        x[i].disabled = true;
    }
    await mergeSort(0, arr.length - 1);
    for (var i = 0; i < x.length; i++){
        x[i].disabled = false;
    }
}

async function helper_partition(low,high) {
    var div = document.querySelectorAll(".box");
    let pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            div[i].style.backgroundColor = "red";
            div[j].style.backgroundColor = "red";
            await wait(20);
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            div[i].style.backgroundColor = "black";
            div[j].style.backgroundColor = "black";
            div[j].style.height = arr[j] + "px";
            div[i].style.height = arr[i] + "px";
        }
    }
    var temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    div[i+1].style.height = arr[i+1] + "px";
    div[high].style.height = arr[high] + "px";
    return i + 1;
}


async function partition(l, r)
{
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(helper_partition(l,r));
        }
    });
}

async function quickSort_helper(l, r) {
    if(l>=r){
        return;
    }
    //let pi;
    let pi=await partition(l, r);
    console.log(pi);
    await quickSort(l, pi - 1);
    await quickSort(pi + 1, r);
}

async function quickSort(l, r) {
    return new Promise(async (resolve, reject) => {
        if (true) {
            resolve(quickSort_helper(l, r));
        }
    });
}

async function quick_sort() {
    var div = document.querySelectorAll(".box");
    var x = document.querySelectorAll(".btn");
    // for (var i = 0; i < x.length; i++){
    //     x[i].disabled = true;
    // }
    await quickSort(0, arr.length - 1);
    for (var i = 0; i < x.length; i++){
        x[i].disabled = false;
    }
}



document.querySelector(".new_array").addEventListener("click", change);
document.querySelector(".bubble_sort").addEventListener("click", bubble_sort);
document.querySelector(".selection_sort").addEventListener("click", selection_sort);
document.querySelector(".insertion_sort").addEventListener("click", insertion_sort);
document.querySelector(".merge_sort").addEventListener("click", merge_sort);
document.querySelector(".quick_sort").addEventListener("click", quick_sort);
begin();

