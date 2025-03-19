wsButton = document.getElementById('wsButton');

wsButton.addEventListener('click', function(){
    console.log('enviar ws')
    telefono= '+584120183670'
    mensaje = 'hola'
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
     // Abrir WhatsApp en otra pestaña
     window.open(url, '_blank');
})