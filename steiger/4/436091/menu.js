function gogirl(e) {
    if (document.getElementById(e).style.display == 'none') {
        document.getElementById(e).style.display = 'block';
    } else {
        document.getElementById(e).style.display = 'none';
    }
}

function hideall() {
        var Nodes = document.getElementsByTagName('ul')
        var max = Nodes.length
        for(var i = 0;i < max;i++) {
                var nodeObj = Nodes.item(i)
                nodeObj.style.display = 'none';
        }
}

