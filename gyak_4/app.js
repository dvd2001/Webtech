const maxTry=20;
let tryCount=0;
const random = Math.floor(Math.random()*1000000);
console.log(random);
document.getElementById('tippek').innerHTML='Tippelések száma: '+tryCount+'/'+maxTry;
document.getElementById('tipp').addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        tippel();
    }
});
function tippel(){
    tryCount++;
    document.getElementById('tippek').innerHTML='Tippek: '+(tryCount+1)+'/'+maxTry;
    if(tryCount==maxTry){
        alert('Sajnos ez most nem sikerült!');
        return;
    }
    const tipp = document.getElementById('tipp').value;
    if(tipp==random){
        alert('Gratulálok '+tryCount+' lépésből eltaláltad!');
        return;
    }
    else if(tipp>random){
        alert(tryCount+'. tipp nem talált: A megoldás kisebb.');
        return;
    }else{
        alert(tryCount+'. tipp nem talált: A megoldás nagyobb.');
        return;
    }
}