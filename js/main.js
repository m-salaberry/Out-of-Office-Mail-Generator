//Habilita o deshabilita el box de respuesta
document.getElementById("tipoDeMensajeSelector").addEventListener("change", function(){
    if (this.value === "Out of office"){
        document.getElementById("response").disabled = false;
    }
    else{
        document.getElementById("response").disabled = true;
    }
})

//Habilita o deshabilita el box de retorno
document.getElementById("tipoDeMensajeSelector").addEventListener("change", function(){
    if (this.value === "Holiday"){
        document.getElementById("paisSelector").disabled = false;
        document.getElementById("day").disabled = false;
        document.getElementById("dday").disabled = false;
        document.getElementById("month").disabled = false;
        document.getElementById("year").disabled = false;
        document.getElementById("fechaSelector").disabled =true;
    }
    else if(this.value === "Annual leave"){
        document.getElementById("paisSelector").disabled = true;
        document.getElementById("day").disabled = false;
        document.getElementById("dday").disabled = false;
        document.getElementById("month").disabled = false;
        document.getElementById("year").disabled = false;
        document.getElementById("fechaSelector").disabled =true;   
    }
    else if(this.value === "Out of office"){
        document.getElementById("paisSelector").disabled = true;
        document.getElementById("day").disabled = true;
        document.getElementById("dday").disabled = true;
        document.getElementById("month").disabled = true;
        document.getElementById("year").disabled = true;
        document.getElementById("fechaSelector").disabled =false;
    }
})

//Habilita o deshabilita el box de fecha
document.getElementById("fechaSelector").addEventListener("change", function(){
    if (this.value === "until"){
        document.getElementById("day").disabled = false;
        document.getElementById("dday").disabled = false;
        document.getElementById("month").disabled = false;
        document.getElementById("year").disabled = false;
    }
    else{
        document.getElementById("day").disabled = true;
        document.getElementById("dday").disabled = true;
        document.getElementById("month").disabled = true;
        document.getElementById("year").disabled = true;
    }
})

//Se encarga de cargar las variables y generar el mensaje
function loadVars(){
        
    // Se guardan los datos seleccionados en variables
    var tipoMensaje = document.getElementById("tipoDeMensajeSelector").value;
    
    // Filtro para el mensaje generado
    SwitchTipoMensaje(tipoMensaje);

    // Cambia el texto superior del mensaje generado
    document.getElementById("example").innerText = "This is your generated & copied to the clipboard mail massage";

    // Copia el texto al portapapeles
    var copyText = document.getElementById("correo").innerText;

    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = copyText;
    document.body.appendChild(elementoTemporal);

    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0,99999);

    document.execCommand("copy");

    document.body.removeChild(elementoTemporal);

    //navigator.clipboard.writeText(copyText);

}

//Función que se encarga de cambiar el mensaje según el tipo de mensaje seleccionado
function SwitchTipoMensaje(tipomsj){
    //Carga de variables para concatenar el mensaje
        var persona = document.getElementById("personaSelector").value;
        var pais = document.getElementById("paisSelector").value;
        var time = document.getElementById("fechaSelector").value;
        var tiempo;
        var tempo;
        var day = document.getElementById("day").value;
        var dia;
        var diab;
        var dday = document.getElementById("dday").value;
        var month = document.getElementById("month").value;
        var mes;
        var mesb;
        var year = document.getElementById("year").value;
        var techspp = document.getElementById("yn").value;
        let texto;

        // Traduccion del tiempo
        switch(time){
            case "today":
            tiempo = "hoy";
            tempo = "hoje";
            break;
            case "this morning":
            tiempo = "esta mañana";
            tempo = "está manhã";
            break;
            case "this afternoon":
            tiempo = "esta tarde";
            tempo = "está tarde";
            break;
            case "this morning":
            tiempo = "esta mañana";
            tempo = "esta manhã";
            break;
            case "until":
                tiempo="hasta";
                tempo= "até";
        }

        // Traduccion del dia de la semana
        switch(day){
            case " Monday":
                dia = " Lunes";
                diab = " Segunda-feira";
                break;
                case " Tuesday":
                dia = " Martes";
                diab = " Terça-feira";
                break;
                case " Wednesday":
                dia = " Miercoles";
                diab = " Quarta-feira";
                break;
                case " Thursday":
                dia = " Jueves";
                diab = " Quinta-feira";
                break;
                case " Friday":
                dia = " Viernes";
                diab = " Sexta-feira";
                break;
        }

        //Traducción del mes
        switch(month){
            case "01":
                month = " January";
                mes = " Enero";
                mesb = " Janeiro";
                break;
                case "02":
                month = " February";
                mes = " Febrero";
                mesb = " Fevereiro";
                break;
                case "03":
                month = " March";
                mes = " Marzo";
                mesb = " Março";
                break;
                case "04":
                month = " April";
                mes = " Abril";
                mesb = " Abril";
                break;
                case "05":
                month = " May";
                mes = " Mayo";
                mesb = " Maio";
                break;
                case "06":
                month = " June";
                mes = " Junio";
                mesb = " Junho";
                break;
                case "07":
                month = " July";
                mes = " Julio";
                mesb = " Julho";
                break;
                case "08":
                month = " August";
                mes = " Agosto";
                mesb = " Agosto";
                break;
                case "09":
                month = " September";
                mes = " Septiembre";
                mesb = " Setembro";
                break;
                case "10":
                month = " October";
                mes = " Octubre";
                mesb = " Outubro";
                break;
                case "11":
                month = " November";
                mes = " Noviembre";
                mesb = " Novembro";
                break;
                case "12":
                month = " December";
                mes = " Diciembre";
                mesb = " Dezembro";
                break;
                
        }
        // Seleccionar el elemento <p> por su ID
        var parrafo = document.getElementById("correo");

        //Filtra el tipo de mensaje
        switch (tipomsj){
            case "Annual leave": 
                texto = "Thank you for your email. I'll be out of office for annual leave. Returning " +day +month +dday +", " +year +"." 
                        +"<br><br> Gracias por su correo. Estaré fuera de oficina por vacaciones. Retornando el " +dia +dday+" de"+mes  +", " +year +"."
                        +"<br><br> Obrigado pelo seu contato. Estarei fora do escritório de férias. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                parrafo.innerHTML = texto;
            break;
            case "Holiday":
                //Filtra el país elegido
                switch(pais){
                case "Arg":
                texto = "I'll be out of office due a national holiday in Argentina. I will be returning on " +day +month +dday+", " +year +"."
                        +"<br><br> Estaré fuera de oficina por feriado nacional en Argentina. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Argentina. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                case "Br":
                texto = "I'll be out of office due a national holiday in Brazil. I will be returning on " +day +month +dday+", " +year +"."
                        +"<br><br> Estaré fuera de oficina por feriado nacional en Brasil. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Brasil. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                case "Mex":
                texto = "I'll be out of office due a national holiday in Mexico. I will be returning on " +day +month +dday+", " +year +"."
                        +"<br><br> Estaré fuera de oficina por feriado nacional en México. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no México. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                case "Ecu":
                texto = "I'll be out of office due a national holiday in Ecuator. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Ecuador. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Equador. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                case "Can":
                texto = "I'll be out of office due a national holiday in Canada. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Canadá. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Canadá. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                case "Usa":
                texto = "I'll be out of office due a national holiday in United States. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Estados Unidos. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Estados Unidos. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                    case "Rom":
                texto = "I'll be out of office due a national holiday in Romania. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Rumania. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Rumania. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                    case "Uru":
                texto = "I'll be out of office due a national holiday in Uruguay. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Uruguay. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Uruguai. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                    case "Ch":
                texto = "I'll be out of office due a national holiday in Chile. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Chile. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Chile. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                    case "Col":
                texto = "I'll be out of office due a national holiday in Colombia. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Colombia. Retornando el " +dia +dday+" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Colombia. Retornando na" +diab +dday+" de"+mesb +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                    case "Esp":
                texto = "I'll be out of office due a national holiday in Spain. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en España. Retornando el " +dia +dday+" de"+mes  +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Espanha. Retornando na" +diab +dday+" de"+mesb  +", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                    case "Mar":
                texto = "I'll be out of office due a national holiday in Morocco. I will be returning on " +day +month +dday+", " +year +"."
                +"<br><br> Estaré fuera de oficina por feriado nacional en Marruecos. Retornando el " +dia  +dday +" de"+mes +", " +year +"."
                        +"<br><br> Estarei fora do escritório durante férias no Marroccos. Retornando na" +diab +dday +" de"+mesb+", " +year +"."
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        + "<br> " +persona
                        +techspp;
                    parrafo.innerHTML = texto;
                    break;
                default:
                    break;
                }
            break;
            case "Out of office":
            var res = document.getElementById("response").value;
            // Filtra si la selección es Until
                if(time === "until"){
                    // Filtra si hay respuesta con demora o sin respuesta
                    if(res === "Noresponse"){
                    texto = "Thank you for your email. I'll be out of office " +time +day +month +dday+", " +year +". Without any access to our mailboxes."
                    +"<br><br> Gracias por su correo. Estaré fuera de oficina " +tiempo +dia +dday +" de"+mes +", " +year +". Sin acceso a nuestra casilla de correos."
                        +"<br><br> Obrigado pelo seu contato. Estarei fora do escritório " +tempo +diab +dday+" de" +mesb +", " +year+". Sem acesso à nossa caixa de correio."
                        + "<br> " +persona
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        +techspp;
                    parrafo.innerHTML = texto;
                    }
                    if (res === "Delay"){
                        texto = "Thank you for your email. I'll be out of office " +time +day +month +dday+", " +year +". With limited access to my mailbox. Please, expect a delay in my answer."
                        +"<br><br> Gracias por su correo. Estaré fuera de oficina " +tiempo +dia +dday+" de" +mes +", " +year +". Con acceso limitado a mi buzón. Por favor espere un retraso en mi respuesta."
                        +"<br><br> Obrigado pelo seu contato. Estarei fora do escritório " +tempo +diab +dday +" de"+mesb +", " +year+". Com acesso limitado à minha caixa de correio. Por favor, espere um atraso na minha resposta."
                        + "<br> " +persona
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        +techspp;
                        parrafo.innerHTML = texto;
                    }
                }
                else{
                    // Filtra si hay respuesta con demora o sin respuesta
                    if(res === "Noresponse"){
                        texto = "Thank you for your email. I'll be out of office " +time +". Without any access to our mailboxes."
                        +"<br><br> Gracias por su correo. Estaré fuera de oficina " +tiempo +". Sin acceso a nuestra casilla de correos."
                        +"<br><br> Obrigado pelo seu contato. Estarei fora do escritório " +tempo +". Sem acesso à nossa caixa de correio."
                        + "<br> " +persona
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        +techspp;
                    parrafo.innerHTML = texto;
                    }
                    if (res === "Delay"){
                        texto = "Thank you for your email. I'll be out of office " +time +". With limited access to my mailbox. Please, expect a delay in my answer."
                        +"<br><br> Gracias por su correo. Estaré fuera de oficina " +tiempo +". Con acceso limitado a mi buzón. Por favor espere un retraso en mi respuesta."
                        +"<br><br> Obrigado pelo seu contato. Estarei fora do escritório " +tempo +". Com acesso limitado à minha caixa de correio. Por favor, espere um atraso na minha resposta."
                        + "<br> " +persona
                        + "<br><br> Have a great day! / Que tenga un buen día! / Que tenha um bom dia!"
                        +techspp;
                        parrafo.innerHTML = texto;
                    }
                }
            break;
            default:
                break;
        }
    }