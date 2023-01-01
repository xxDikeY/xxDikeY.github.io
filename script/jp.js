var ser1 = $('#Source1').clone();
var ser2 = $('#Source2').clone();

var numSer = 1;

$('source').remove();

var vid = '<video id="Video" class="vid" controls="controls" width="960px" height="540px">';

$('video').append(ser1);



$('#nextSer').on('click', function(){
    if(numSer == 10)
    {
        numSer = 10;
    }

    else
    {

        numSer++;
        
        $('#Video').remove();
        $('source').remove();
        
        $('#VidDiv').append(vid);
        
        switch(numSer) 
        {
            case 1:
                $('#Video').append(ser1);
                break;
                
            case 2:
                $('#Video').append(ser2);
                break;
        }

        $('#numText').html(numSer + ' серия');
    }
});

$('#prevSer').on('click', function(){
    if(numSer == 1)
    {
        numSer = 1;
    }

    else
    {

        numSer--;
        
        $('#Video').remove();
        $('source').remove();
        
        $('#VidDiv').append(vid);
        
        switch(numSer)
        {
            case 1:
                $('#Video').append(ser1);
                break;
                
            case 2:
                $('#Video').append(ser2);
                break;
        }

        $('#numText').html(numSer + ' серия');
    }
});