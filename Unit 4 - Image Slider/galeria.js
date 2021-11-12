numImagen = 2;
totalImagenes = 3;

window.onload = ()=>
{
   cambiaImagen(2);
   var mc = new Hammer(document.getElementById("miimagen"));
    // listen to events...
    mc.on("panleft", pasarIzqConDedo);
    mc.on("panright", pasarDchaConDedo);

    window.addEventListener('deviceorientation', trataOrientacion);
  //  window.addEventListener('devicemotion', trataAceleracion);
    document.getElementById("arrow-left").addEventListener('click', pasarIzq);
    document.getElementById("arrow-right").addEventListener('click', pasarDcha);
}

function pasarIzqConDedo(e)
{
    if (e.isFinal)
        pasarIzq()
}
function pasarIzq()
{
    if (numImagen >1)
    {
        numImagen--;
        cambiaImagen(numImagen);
    }
}
function pasarDchaConDedo(e)
{
    if (e.isFinal)
        pasarDcha()
}
function pasarDcha()
{
    if (numImagen < totalImagenes)
    {
        numImagen++;
        cambiaImagen(numImagen);
    }
}

function cambiaImagen(num)
{
    document.getElementById("miimagen").style.backgroundImage ="url('p"+num+".jpg')";
    document.getElementById("counter").innerHTML = num +" / "+totalImagenes;
    let arrayPuntosPaginacion = document.getElementsByClassName("punto");
    for (span of arrayPuntosPaginacion)
        span.classList.remove('active');
         
    arrayPuntosPaginacion[num-1].classList.add('active');
}

function trataOrientacion(e)
{
    document.getElementById("miimagen").style.transform = "rotateX("+ e.alpha +"deg) rotateY("+ e.beta +"deg)";
}

function trataAceleracion(e)
{
    if (e.acceleration[0]!=0)
        pasarDcha();
    else if (e.acceleration[2]!=0)
            pasarIzq();
}