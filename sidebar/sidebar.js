var question_number = 0,
    colors = ['#e67e22','#3498db','#9b59b6','#f1c40f','#27ae60','#e74c3c','#95a5a6',"#2c3e50"],
    components = {
        'intervention':{
            'definition':'Your technique/contribution to solve the problem',
            'color':'#e67e22'},
        'purpose':{
            'definition':'What is your desired outcome for your intervention?',
            'color':'#3498db'},
        'context':{
            'definition':'Where is your intervention taking place? In time, space, with what users? What is the setting?',
            'color':'#9b59b6'},
        'characteristics':{
            'definition':'Traits to describe your intervention - fast, accurate, etc. Try to be specific i.e. 5mph faster.',
            'color':'#f1c40f'},
        'affordances':{
            'definition':'What are the methods/techniques you use to achieve these characteristics and the overrall intervention?',
            'color':'#27ae60'},
        'arguments':{
            'definition':'What are your reasons these affordances work? What is your evidence?',
            'color':'#e74c3c'}
    }
    done_list = [],
    todo_list = [],
    hexToRgb = function(hex) { 
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
},
    //Makes the chart
    hover = function(){
        //Map each component in the dictionary
        /*
        for(component in components){
            $('.component.' + component).hover(function(){
                var color = components[component]['color']
                var rgb = hexToRgb(color);
                console.log(component);
                $('.component.' + component).css({
                    'background-color':'rgba(' + rgb['r'] + ',' +rgb['g'] +',' + rgb['b'] + ', 0.5)'  
                }); 
            },function() {
                $('.component.' + component).css({
                    'background-color':'#ffffff'
                });
            }); 
        }*/

        //SUPER JANK CODE - will fix later (loops and jQuery are weird) - Sameer 1/20

        $('.component.intervention').hover(function(){
            var color = components['intervention']['color']
            var rgb = hexToRgb(color);
            $('.component.intervention').css({
                'background-color':'rgba(' + rgb['r'] + ',' +rgb['g'] +',' + rgb['b'] + ', 0.5)'  
            }); 
            $('#component-definition').addClass('load');
            $('#component-definition h5').text('Intervention Definition');
            $('#paragraph-definition').text(components['intervention']['definition']);
        },function() {
            $('.component.intervention').css({
                'background-color':'#ffffff'
            });
            // $('#component-definition').removeClass('load');
        }); 



        $('.component.purpose').hover(function(){
            var color = components['purpose']['color']
            var rgb = hexToRgb(color);
            $('.component.purpose').css({
                'background-color':'rgba(' + rgb['r'] + ',' +rgb['g'] +',' + rgb['b'] + ', 0.5)'  
            });
            $('#component-definition').addClass('load');
            $('#component-definition h5').text('Purpose Definition');
            $('#paragraph-definition').text(components['purpose']['definition']); 
        },function() {
            $('.component.purpose').css({
                'background-color':'#ffffff'
            });
            // $('#component-definition').removeClass('load');
        });

        $('.component.context').hover(function(){
            var color = components['context']['color']
            var rgb = hexToRgb(color);
            $('.component.context').css({
                'background-color':'rgba(' + rgb['r'] + ',' +rgb['g'] +',' + rgb['b'] + ', 0.5)'  
            });
            $('#component-definition').addClass('load');
            $('#component-definition h5').text('Context Definition');
            $('#paragraph-definition').text(components['context']['definition']);
        },function() {
            $('.component.context').css({
                'background-color':'#ffffff'
            });
            // $('#component-definition').removeClass('load');
        });

         $('.component.characteristics').hover(function(){
            var color = components['characteristics']['color']
            var rgb = hexToRgb(color);
            $('.component.characteristics').css({
                'background-color':'rgba(' + rgb['r'] + ',' +rgb['g'] +',' + rgb['b'] + ', 0.5)'  
            }); 
            $('#component-definition').addClass('load');
            $('#component-definition h5').text('Characteristics Definition');
            $('#paragraph-definition').text(components['characteristics']['definition']);
        },function() {
            $('.component.characteristics').css({
                'background-color':'#ffffff'
            });
            // $('#component-definition').removeClass('load');
        });

        $('.component.affordances').hover(function(){
            var color = components['affordances']['color']
            var rgb = hexToRgb(color);
            $('.component.affordances').css({
                'background-color':'rgba(' + rgb['r'] + ',' +rgb['g'] +',' + rgb['b'] + ', 0.5)'  
            }); 
            $('#component-definition').addClass('load');
            $('#component-definition h5').text('Affordances Definition');
            $('#paragraph-definition').text(components['affordances']['definition']);
        },function() {
            $('.component.affordances').css({
                'background-color':'#ffffff'
            });
            // $('#component-definition').removeClass('load');
        });

        $('.component.arguments').hover(function(){
            var color = components['arguments']['color']
            var rgb = hexToRgb(color);
            $('.component.arguments').css({
                'background-color':'rgba(' + rgb['r'] + ',' +rgb['g'] +',' + rgb['b'] + ', 0.5)'  
            });
            $('#component-definition').addClass('load');
            $('#component-definition h5').text('Arguments Definition');
            $('#paragraph-definition').text(components['arguments']['definition']);
        },function() {
            $('.component.arguments').css({
                'background-color':'#ffffff'
            });
            // $('#component-definition').removeClass('load');
        });
    },
    //from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    
    add_todo_questions = function(){    
    
    };
hover();