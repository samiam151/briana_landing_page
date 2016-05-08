// Make the home page height equal to the viewport
$('.home').css('height', function(){
    var winHeight = $(window).height(),
        // padding = winHeight * 0.08;
        padding = winHeight;
    return winHeight;
});

// Modal functionality
var modalContent = $('.modalContent'),
        modal = $('.modal');

$('.work li').each(function(){

    // Click events for the modal
    $(this).on('click', function(){
        var arrayOffset = 1,
            num = $(this).data('work-number'),
            thisWork = works[num];
        // console.log(thisWork);

        // $('.modalCover').css('background-color', 'rgba(0,0,0,0.5)');
        modal.css({
            'display': 'block',
            'opacity': '1'
        });

        // Populate the modal information
        $('.modal-name').html(thisWork.name);
        $('.modal-problem').html(thisWork.problem);
        $('.modal-solution').html(thisWork.solution);
        thisWork.client ? $('.modal-client').html(thisWork.client) : $('.modal-client').html('');
        
        // Add the pictures
        thisWork.pictures.forEach(function(item){
            $('.modal-pictures').append('<img src="' + item + '">');
        });

        // To run when the modal closes
        $('.close').on('click', function(){
            modal.css('display', 'none');
            $('.modal-pictures').html(''); // clear the pictures div 
        });
    });

    // // Hover events
    // $(this).on('hover', function(){
    //     $(this).css('background-color', 'black');
    // });

});


