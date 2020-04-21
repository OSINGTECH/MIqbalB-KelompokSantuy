var myCanvas    = document.getElementById('myCanvas');
var ctx         = myCanvas.getContext('2d');
myCanvas.width  = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

function gelas(x, y, lebar, tinggi, warna1, warna2) {
    let lGrad = ctx.createLinearGradient(x, y-40, x, y+150)
    lGrad.addColorStop(0.3, warna1);
    lGrad.addColorStop(0.7, warna2);
    ctx.fillStyle = lGrad;
    ctx.fillRect(x, y, lebar, tinggi);
    ctx.save();
}

// pembuatan gelas
gelas(340, 150, 150, 200, "#00FFFF", "#006400");
gelas(600, 150, 150, 200, "#00FFFF", "#006400");
gelas(860, 150, 150, 200, "#00FFFF", "#006400");

// tutup 1
ctx.fillStyle = '#006400';
ctx.translate(0, 0);
ctx.rotate(0 * Math.PI / 180);
ctx.fillRect(340, 130, 150, 20);
ctx.strokeStyle = "#708090";
ctx.lineWidth = 1;
ctx.strokeRect(340, 130, 150, 20);
ctx.fillStyle = '#000000';

ctx.fillRect(400, 115, 15, 15);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(400, 115, 15, 15);
ctx.save();


// tutup 2
ctx.fillStyle = '#006400';
ctx.translate(290, -107);
ctx.rotate(40 * Math.PI / 180);
ctx.fillRect(370, -112, 150, 20);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(370, -112, 150, 20);

ctx.fillStyle = '#000035';
ctx.fillRect(435, -127, 15, 15);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(435, -127, 15, 15);
ctx.save();

// tutup3
ctx.fillStyle = '#006400';
ctx.translate(290, -107);
ctx.rotate(50 * Math.PI / 180);
ctx.fillRect(12, -419, 140, 20);
ctx.strokeStyle = "#00008B";
ctx.lineWidth = 1;
ctx.strokeRect(12, -419, 140, 20);
ctx.fillStyle = '#F5FFFA';
ctx.fillRect(800, 235, 10, 10);

ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.save();
ctx.restore();
ctx.fillStyle = '#000035';
ctx.fillRect(75, -435, 15, 15);
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;
ctx.strokeRect(75, -435, 15, 15);
