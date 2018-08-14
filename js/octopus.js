var octopus= {
    onStart: function (){
        
            view.createHeader(model.NumberOfDays);
            view.createRow(model.StudentName);            
            view.createCheckBoxes(model.NumberOfDays);
            view.numBoxChecked(model.NumberOfStudents);
            view.assignStudentName(model.StudentName);
            view.markCheck();
            view.dayspresent(model.NumberOfDays);
    }
    
};

octopus.onStart();