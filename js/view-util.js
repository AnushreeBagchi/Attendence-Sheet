var view= {    
    createHeader  : function (num){
        $('thead tr').append(`<th class="name-col">Student Name</th>`);
        for (i=num; i>=1;i--){
            $('.name-col').after (`<th>${i}</th>`);            
        }
        $('thead tr').append(`<th class="missed-col">Days Missed-col</th>`);
    },
    createRow: function (name){        
        for (var i =0;i<name.length;i++){
            $('tbody').append(`<tr class="student"></tr>`);
        }
        $('.student').append(`<td class="name-col">${name[i]}</td>`);                                   
    },
    createCheckBoxes: function (num){
        for (var i=0;i<num;i++){
            $('.student').append (`<td class="attend-col"><input type="checkbox"></td>`);
        }
    },
    numBoxChecked: function (num){
            $('.student').append('<td class="missed-col">0</td>');
    },
    assignStudentName: function (name){

        var arr=$('td.name-col');
         for  (var i=0;i<arr.length;i++){
            $(arr[i]).text(name[i]);
         }
    },
    markCheck: function (){
        $('.attend-col input').on('click',function (){
            $(this).toggleClass('checked');
        })
    },
    dayspresent : function (totalDays){
            $('.attend-col input').on('click',function (){
            var daysPresent = [];
            var daysMissed=[];
            var studentsDOM = $('.student');
            for (var i=0;i< studentsDOM.length;i++)
            {
                daysPresent[i]=$(studentsDOM[i]).children('.attend-col').children('.checked').length;     
                daysMissed[i]=totalDays-daysPresent[i];
                var elem=$('td.missed-col')[i];
                $(elem).text(daysMissed[i]);
            }
            
        })
    }

};

