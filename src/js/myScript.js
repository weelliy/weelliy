$(document).ready(function(){
    
    function modWind() {
        $("#myModal").modal("show")
    };
    
    setTimeout(modWind, 10000)
    
    let options = {treshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.about_me p')
    elements.each((i, el) => {
        observer.observe(el);
    });
    
    $(".loader_container").css("display", "none");
    
    function calculate(){
        let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
        let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
        $(".deadlines .digit").text(days);
        $(".cost .digit").text(sum);
    }
    $("select").on("change", function(){
        calculate()
    });
    calculate()
   
    $(window).scroll(() => {
            let scrollDistance = $(window).scrollTop();
    
            $('body .section').each((i, el) => {
        
                if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                    $('nav a').each((i, el) => {
                        if ($(el).hasClass('active')) {
                            $(el).removeClass('active');
                        }
                    });
            
                    $('nav li:eq(' + i + ')').find('a').addClass('active');
                }
        
            })
        });
    
    function animNum(cls){
        
        console.log(cls)
        
        $(function() {
	
		var target_block = $(".statistics"); // Ищем блок 
		var blockStatus = true;
        var numb_end = parseInt($(cls).text())
		
		$(window).scroll(function() {
		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
			
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				
				$({numberValue: 0}).animate({numberValue: numb_end}, {
				
					duration: 5000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
					easing: "linear",
					
					step: function(val) {
					
						$(cls).html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
						
					}
					
				});
				
			}
			
		});
		
	});
    }
    
    animNum(".numb1");
    animNum(".numb2");
    animNum(".numb3");
    animNum(".numb4");
    
    
    
});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show_animation')
        }
    })
}

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 58 + "px"})
});

window.onload = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry)
                // ссылка на оригинальное изображение хранится в атрибуте "data-src"
                entry.target.src = entry.target.dataset.src
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 })

    document.querySelectorAll('.imgLoad').forEach(img => observer.observe(img))
};

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});