window.addEventListener('load', init, 'else');
function init(){
    boton = document.getElementById('boton');
    boton.addEventListener('click', () => {
        alert('[ Eres Una buena Persona ]');
    });
    // Opcion de id 'hover1' 
    open1 = document.getElementById('open1');
    close1 = document.getElementById('close1');
    open1.addEventListener('click', () => {
        document.getElementById('pucho1').style.display = 'block';
        close1.style.display = 'block';
        open1.style.display = 'none';
    });
    close1.addEventListener('click', () => {
        document.getElementById('pucho1').style.display = 'none';
        close1.style.display = 'none';
        open1.style.display = 'block'; 
    });
    // Opcion de id 'hover2'
    open2 = document.getElementById('open2');
    close2 = document.getElementById('close2');
    open2.addEventListener('click', () => {
        document.getElementById('pucho2').style.display = 'block';
        close2.style.display = 'block';
        open2.style.display = 'none';
    });
    close2.addEventListener('click', () => {
        document.getElementById('pucho2').style.display = 'none';
        close2.style.display = 'none';
        open2.style.display = 'block'; 
    });
    // Opcion de id 'hover3'
    open3 = document.getElementById('open3');
    close3 = document.getElementById('close3');
    open3.addEventListener('click', () => {
        document.getElementById('pucho3').style.display = 'block';
        close3.style.display = 'block';
        open3.style.display = 'none';
    });
    close3.addEventListener('click', () => {
        document.getElementById('pucho3').style.display = 'none';
        close3.style.display = 'none';
        open3.style.display = 'block'; 
    });
    // Opcion de id 'hover4'
    open4 = document.getElementById('open4');
    close4 = document.getElementById('close4');
    open4.addEventListener('click', () => {
        document.getElementById('pucho4').style.display = 'block';
        close4.style.display = 'block';
        open4.style.display = 'none';
    });
    close4.addEventListener('click', () => {
        document.getElementById('pucho4').style.display = 'none';
        close4.style.display = 'none';
        open4.style.display = 'block'; 
    });
    // Opcion de id 'hover5'
    open5 = document.getElementById('open5');
    close5 = document.getElementById('close5');
    open5.addEventListener('click', () => {
        document.getElementById('pucho5').style.display = 'block';
        close5.style.display = 'block';
        open5.style.display = 'none';
    });
    close5.addEventListener('click', () => {
        document.getElementById('pucho5').style.display = 'none';
        close5.style.display = 'none';
        open5.style.display = 'block'; 
    });
    // TODO: TRANSICION DE LOS VIDEOS
    option1 = document.getElementById('option1');
    option2 = document.getElementById('option2');
    option3 = document.getElementById('option3');
    option4 = document.getElementById('option4');
    option5 = document.getElementById('option5');
    option1.addEventListener('click', primeraOpcion);
    option2.addEventListener('click', segundaOpcion);
    option3.addEventListener('click', terceraOpcion);
    option4.addEventListener('click', cuartaOpcion);
    option5.addEventListener('click', quintaOpcion);
}

// Primera
function primeraOpcion(){
    document.getElementById('movie1').style.display = 'block';
    document.getElementById('movie2').style.display = 'none';
    document.getElementById('movie3').style.display = 'none';
    document.getElementById('movie4').style.display = 'none';
    document.getElementById('movie5').style.display = 'none';
    
    document.getElementById('s-options').style.display = 'block';
    document.getElementById('s-title1').style.display = 'block';
    document.getElementById('s-title2').style.display = 'none';
    document.getElementById('s-title3').style.display = 'none';
    document.getElementById('s-title4').style.display = 'none';
    document.getElementById('s-title5').style.display = 'none';

    document.getElementById('hover1').style.display = 'none';    
    document.getElementById('hover2').style.display = 'block';    
    document.getElementById('hover3').style.display = 'block';    
    document.getElementById('hover4').style.display = 'block';    
    document.getElementById('hover5').style.display = 'block'; 
}
// Segunda
function segundaOpcion(){
    document.getElementById('movie1').style.display = 'none';
    document.getElementById('movie2').style.display = 'block';
    document.getElementById('movie3').style.display = 'none';
    document.getElementById('movie4').style.display = 'none';
    document.getElementById('movie5').style.display = 'none';

    document.getElementById('s-options').style.display = 'none';
    document.getElementById('s-title1').style.display = 'none';
    document.getElementById('s-title2').style.display = 'block';
    document.getElementById('s-title3').style.display = 'none';
    document.getElementById('s-title4').style.display = 'none';
    document.getElementById('s-title5').style.display = 'none';

    document.getElementById('hover1').style.display = 'block';    
    document.getElementById('hover2').style.display = 'none';    
    document.getElementById('hover3').style.display = 'block';    
    document.getElementById('hover4').style.display = 'block';    
    document.getElementById('hover5').style.display = 'block';    

}
// Tercera
function terceraOpcion(){
    document.getElementById('movie1').style.display = 'none';
    document.getElementById('movie2').style.display = 'none';
    document.getElementById('movie3').style.display = 'block';
    document.getElementById('movie4').style.display = 'none';
    document.getElementById('movie5').style.display = 'none';

    document.getElementById('s-options').style.display = 'none';
    document.getElementById('s-title1').style.display = 'none';
    document.getElementById('s-title2').style.display = 'none';
    document.getElementById('s-title3').style.display = 'block';
    document.getElementById('s-title4').style.display = 'none';
    document.getElementById('s-title5').style.display = 'none';

    document.getElementById('hover1').style.display = 'block';    
    document.getElementById('hover2').style.display = 'block';    
    document.getElementById('hover3').style.display = 'none';    
    document.getElementById('hover4').style.display = 'block';    
    document.getElementById('hover5').style.display = 'block'; 
}
// Cuarta
function cuartaOpcion(){
    document.getElementById('movie1').style.display = 'none';
    document.getElementById('movie2').style.display = 'none';
    document.getElementById('movie3').style.display = 'none';
    document.getElementById('movie4').style.display = 'block';
    document.getElementById('movie5').style.display = 'none';

    document.getElementById('s-options').style.display = 'none';
    document.getElementById('s-title1').style.display = 'none';
    document.getElementById('s-title2').style.display = 'none';
    document.getElementById('s-title3').style.display = 'none';
    document.getElementById('s-title4').style.display = 'block';
    document.getElementById('s-title5').style.display = 'none';

    document.getElementById('hover1').style.display = 'block';    
    document.getElementById('hover2').style.display = 'block';    
    document.getElementById('hover3').style.display = 'block';    
    document.getElementById('hover4').style.display = 'none';    
    document.getElementById('hover5').style.display = 'block'; 
}
// Quinta
function quintaOpcion(){
    document.getElementById('movie1').style.display = 'none';
    document.getElementById('movie2').style.display = 'none';
    document.getElementById('movie3').style.display = 'none';
    document.getElementById('movie4').style.display = 'none';
    document.getElementById('movie5').style.display = 'block';

    document.getElementById('s-options').style.display = 'none';
    document.getElementById('s-title1').style.display = 'none';
    document.getElementById('s-title2').style.display = 'none';
    document.getElementById('s-title3').style.display = 'none';
    document.getElementById('s-title4').style.display = 'none';
    document.getElementById('s-title5').style.display = 'block';

    document.getElementById('hover1').style.display = 'block';   
    document.getElementById('hover2').style.display = 'block';   
    document.getElementById('hover3').style.display = 'block';    
    document.getElementById('hover4').style.display = 'block';    
    document.getElementById('hover5').style.display = 'none';
}