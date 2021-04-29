;(function($){

    var brando = {
        init: function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section5Fn();
        },
        headerFn:function(){
          var $headerH = $('#header .wrap .gap');
          var $wrapC = $('#header .wrap');
          var $headerBoreder = $('#header');
          var paralIf  = 0;
          var $skipUp   = $('#header .skip-up');
          var $skipBtn = $('#header .skip-content .skip > a');
          var $skipaddWrap  = $('#header .skip-content .skip');
          var skipArray = [2,4,5,9,11,13];
          var skipIf = 0;
          var $imgContent = $('#header .img-content');
          var $skipUpBtn = $('#header .skip-up-btn');

          $skipBtn.each(function(idx){
            $(this).on({
              click:function(){
                $skipaddWrap.removeClass('hSkipClick');
                $skipaddWrap.eq(idx).addClass('hSkipClick');
                skipIf = $('#section'+skipArray[idx]).offset().top;
                $('html, body').stop().animate({scrollTop:skipIf},800);
              }
            })
          });
          $imgContent.on({
            click:function(){
              $('html, body').stop().animate({scrollTop:0},800);
            }
          });
          $skipUpBtn.on({
            click:function(){
              $('html, body').stop().animate({scrollTop:0},800);
            }
          })

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section1').offset().top  ){
              if(paralIf==0){
                paralIf=1;
                $headerH.css({padding:'15px 15px'});
                $wrapC.css({background:'#000'});
                $headerBoreder.css({'border-bottom':'0px'});
                $skipUp.addClass('hedAddBlock');
              }
            }
            if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $headerH.css({padding:'22.5px 15px'});
                    $wrapC.css({background:'transparent'});
                    $headerBoreder.css({'border-bottom':'1px solid rgb(98,98,98)'});
                    $skipUp.removeClass('hedAddBlock');
                }
            });


          
        },
        section1Fn:function(){
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide     = $('#section1 .slide');
            var $window     = $(window);
            var $winW      = $window.width();
            var cnt        = 0;
            var pageCnt    = 0;
            var $pageBtnGap   = $('#section1 .page-btn-gap');
            var $pageBtn   = $('#section1 .page-btn');

            
            function responseFn(){
              $winW = $window.width();
              $slide.css({width:$winW})
              mainSlideFn();
            }
            setTimeout(responseFn,100);
            responseFn();
            
            $window.resize(function(){
              responseFn();
            })

            function mainSlideFn(){
              $slideWrap.stop().animate({left:cnt*-$winW},1000,function(){
                if(cnt>2){cnt=0}
                if(cnt<0){cnt=2}
                pageClickFn();
                $slideWrap.stop().animate({left:cnt*-$winW},0)
              })

            }
            function nextSlideFn(){
              if( !$slideWrap.is(':animated')){
                cnt++;
                mainSlideFn();
              }
            }
            function prevSlideFn(){
              if( !$slideWrap.is(':animated')){
                cnt--;
                mainSlideFn();
              }
            }

            //터치스와이프
            var touchStart = 0;
            var touchEnd = 0;

            $slideWrap.on({
              mousedown:function(e){
                e.preventDefault();
                touchStart = e.pageX; // pageX or clientX
              },
              mouseup:function(e){
                e.preventDefault();
                touchEnd = e.pageX;
                touchSwipeFn();
              }
            });
            
            function touchSwipeFn(){
              if(touchStart>=touchEnd){
                if( !$slideWrap.is(':animated')){
                  nextSlideFn();
                }
              }else{
                if( !$slideWrap.is(':animated')){
                  prevSlideFn();
                }
              }
            }

            
            // $slideWrap.swipe({
            //     swipeLeft:function(e){ //오른쪽에서 왼쪽으로 터치
            //       e.preventDefault();
            //       if( !$slideWrap.is(':animated')){
            //         nextSlideFn();
            //       }
            //     },
            //     swipeRight:function(e){ //왼쪽에서 오른쪽으로 터치
            //       e.preventDefault();
            //       if( !$slideWrap.is(':animated')){
            //         prevSlideFn();
            //       }
            //     }
            //   });

              function pageClickFn(){
                $pageBtn.removeClass('addpagehover');
                $pageBtn.eq(cnt).addClass('addpagehover');
              }
              $pageBtnGap.each(function(idx){
                $(this).on({
                  click:function(){
                    cnt = idx;
                    pageClickFn();
                    mainSlideFn();
                  }
                })
              })
        },
        section2Fn:function(){

        },
        section5Fn:function(){

          var $galleryLi = $('#section5 ul.gallery li.col');   // 갤러리 포지션 영역
          var $galleryClick = $('#section5 li.tap-btn-gap');  // 애드클래스 영역 an 버튼영역
          var $galleryUl = $('#section5 ul.gallery'); // 컨텐츠 양에 따른 높이값 지정해줘야함
          var $gallcontentGap = $('#section5 li.col .content-gap') // 마우스 호버시 스케일값을 올려줘야해서 따로지정한 갭을 리사이즈해줘야함
          var galleryBtnNum = 0;   // 각 버튼중 어떤 버튼을 클릭했는지 정하는 값
          var imgN        = $galleryLi.length;
          var $window     = $(window);
          var $winW       = $window.innerWidth();
          var cols        = 4;
          var rows         = Math.ceil(imgN/cols);
          var galleryConW  = $winW/cols;
          var galleryConH  = galleryConW;

          var $gallcontentGapW = ($winW-60*cols)/cols;


          function reponseFn(){

            $winW = $window.innerWidth();
                    if( $winW > 1200 ){
                        cols = 4;
                    }
                    else if( $winW > 1000 ){
                        cols = 3;
                    }
                    else if( $winW > 770 ){
                        cols = 2;
                    }
                    else{
                        cols = 1;
                    }
            
            if(galleryBtnNum == 0){
              imgN = 8;
              rows         = Math.ceil(imgN/cols);
              $gallcontentGapW = ($winW-60*cols)/cols;
              galleryConW  = $winW/cols;
              galleryConH  = galleryConW;

              //전체 ul 반응형 크기조절
              $galleryUl.css({width:$winW,height:galleryConH*rows});

              // img 반응형 크기 조절
              $galleryLi.css({width:galleryConW,height:galleryConW});

              //img안의 텍스트박스 반응형 크기조절
              $gallcontentGap.css({width:$gallcontentGapW,height:$gallcontentGapW});

              $galleryLi.removeClass('s5AddZoom');

              switch(cols){
                case 4 :

                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*3,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*2,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*3,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 3 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*2,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*1,top:galleryConW*2},600,'easeInOutExpo');
                  break;

                case 2 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*1,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*3},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*1,top:galleryConW*3},600,'easeInOutExpo');
                  break;

                case 1 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*2,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*3,top:galleryConW*3},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*4,top:galleryConW*4},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*5,top:galleryConW*5},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*6,top:galleryConW*6},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*7,top:galleryConW*7},600,'easeInOutExpo');
                  break;

              }


                $galleryLi.eq(0).addClass('s5AddZoom');
                $galleryLi.eq(1).addClass('s5AddZoom');
                $galleryLi.eq(2).addClass('s5AddZoom');
                $galleryLi.eq(3).addClass('s5AddZoom');
                $galleryLi.eq(4).addClass('s5AddZoom');
                $galleryLi.eq(5).addClass('s5AddZoom');
                $galleryLi.eq(6).addClass('s5AddZoom');
                $galleryLi.eq(7).addClass('s5AddZoom');
              
            }else if(galleryBtnNum == 1 ){
              /* 1. HTML        show(zoomIn):13456      hide(zoomOut):027   */
              imgN = 5;
              rows         = Math.ceil(imgN/cols);
              $gallcontentGapW = ($winW-60*cols)/cols;
              galleryConW  = $winW/cols;
              galleryConH  = galleryConW;

              //전체 ul 반응형 크기조절
              $galleryUl.css({width:$winW,height:galleryConH*rows});

              // img 반응형 크기 조절
              $galleryLi.css({width:galleryConW,height:galleryConW});

              //img안의 텍스트박스 반응형 크기조절
              $gallcontentGap.css({width:$gallcontentGapW,height:$gallcontentGapW});

              $galleryLi.removeClass('s5AddZoom');
              

              switch(cols){
                case 4 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*3,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 3 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 2 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  break;

                case 1 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*0,top:galleryConW*3},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*4},600,'easeInOutExpo');
                  break;

              }


                $galleryLi.eq(1).addClass('s5AddZoom');
                $galleryLi.eq(3).addClass('s5AddZoom');
                $galleryLi.eq(4).addClass('s5AddZoom');
                $galleryLi.eq(5).addClass('s5AddZoom');
                $galleryLi.eq(6).addClass('s5AddZoom');
                setTimeout(function(){
                  $galleryLi.eq(0).stop().hide();
                  $galleryLi.eq(2).stop().hide();
                  $galleryLi.eq(7).stop().hide();
                },500)
              
              
            }else if(galleryBtnNum == 2 ){
              /* 2. JQUERY      show(zoomIn):01347      hide(zoomOut):256   */
              imgN = 5;
              rows         = Math.ceil(imgN/cols);
              $gallcontentGapW = ($winW-60*cols)/cols;
              galleryConW  = $winW/cols;
              galleryConH  = galleryConW;

              //전체 ul 반응형 크기조절
              $galleryUl.css({width:$winW,height:galleryConH*rows});

              // img 반응형 크기 조절
              $galleryLi.css({width:galleryConW,height:galleryConW});

              //img안의 텍스트박스 반응형 크기조절
              $gallcontentGap.css({width:$gallcontentGapW,height:$gallcontentGapW});

              $galleryLi.removeClass('s5AddZoom');
              

              switch(cols){
                case 4 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*3,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 3 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 2 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  break;

                case 1 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*3},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*0,top:galleryConW*4},600,'easeInOutExpo');
                  break;

              }


                $galleryLi.eq(0).addClass('s5AddZoom');
                $galleryLi.eq(1).addClass('s5AddZoom');
                $galleryLi.eq(3).addClass('s5AddZoom');
                $galleryLi.eq(4).addClass('s5AddZoom');
                $galleryLi.eq(7).addClass('s5AddZoom');
                setTimeout(function(){
                  $galleryLi.eq(2).stop().hide();
                  $galleryLi.eq(5).stop().hide();
                  $galleryLi.eq(6).stop().hide();
                },500)
              
            }else if(galleryBtnNum == 3 ){
              /* 3. MAGENTO     show(zoomIn):02346      hide(zoomOut):157    */
              imgN = 5;
              rows         = Math.ceil(imgN/cols);
              $gallcontentGapW = ($winW-60*cols)/cols;
              galleryConW  = $winW/cols;
              galleryConH  = galleryConW;

              //전체 ul 반응형 크기조절
              $galleryUl.css({width:$winW,height:galleryConH*rows});

              // img 반응형 크기 조절
              $galleryLi.css({width:galleryConW,height:galleryConW});

              //img안의 텍스트박스 반응형 크기조절
              $gallcontentGap.css({width:$gallcontentGapW,height:$gallcontentGapW});

              $galleryLi.removeClass('s5AddZoom');
              

              switch(cols){
                case 4 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*3,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 3 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 2 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  break;

                case 1 :
                  $galleryLi.eq(0).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(3).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*3},600,'easeInOutExpo');
                  $galleryLi.eq(6).stop().show().animate({left:galleryConW*0,top:galleryConW*4},600,'easeInOutExpo');
                  break;

              }


                $galleryLi.eq(0).addClass('s5AddZoom');
                $galleryLi.eq(2).addClass('s5AddZoom');
                $galleryLi.eq(3).addClass('s5AddZoom');
                $galleryLi.eq(4).addClass('s5AddZoom');
                $galleryLi.eq(6).addClass('s5AddZoom');
                setTimeout(function(){
                  $galleryLi.eq(1).stop().hide();
                  $galleryLi.eq(5).stop().hide();
                  $galleryLi.eq(7).stop().hide();
                },500)
              
            } else if(galleryBtnNum == 4 ){
              /* 4. WORDPRESS   show(zoomIn):12457      hide(zoomOut):036   */

              imgN = 5;
              rows         = Math.ceil(imgN/cols);
              $gallcontentGapW = ($winW-60*cols)/cols;
              galleryConW  = $winW/cols;
              galleryConH  = galleryConW;

              //전체 ul 반응형 크기조절
              $galleryUl.css({width:$winW,height:galleryConH*rows});

              // img 반응형 크기 조절
              $galleryLi.css({width:galleryConW,height:galleryConW});

              //img안의 텍스트박스 반응형 크기조절
              $gallcontentGap.css({width:$gallcontentGapW,height:$gallcontentGapW});

              $galleryLi.removeClass('s5AddZoom');
              

              switch(cols){
                case 4 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*3,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 3 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*2,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  break;

                case 2 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*1,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*1,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  break;

                case 1 :
                  $galleryLi.eq(1).stop().show().animate({left:galleryConW*0,top:galleryConW*0},600,'easeInOutExpo');
                  $galleryLi.eq(2).stop().show().animate({left:galleryConW*0,top:galleryConW*1},600,'easeInOutExpo');
                  $galleryLi.eq(4).stop().show().animate({left:galleryConW*0,top:galleryConW*2},600,'easeInOutExpo');
                  $galleryLi.eq(5).stop().show().animate({left:galleryConW*0,top:galleryConW*3},600,'easeInOutExpo');
                  $galleryLi.eq(7).stop().show().animate({left:galleryConW*0,top:galleryConW*4},600,'easeInOutExpo');
                  break;

              }


                $galleryLi.eq(1).addClass('s5AddZoom');
                $galleryLi.eq(2).addClass('s5AddZoom');
                $galleryLi.eq(4).addClass('s5AddZoom');
                $galleryLi.eq(5).addClass('s5AddZoom');
                $galleryLi.eq(7).addClass('s5AddZoom');
                setTimeout(function(){
                  $galleryLi.eq(0).stop().hide();
                  $galleryLi.eq(3).stop().hide();
                  $galleryLi.eq(6).stop().hide();
                },500)
              
            }
          }reponseFn();
          setTimeout(reponseFn,100);

          $window.resize(function(){
            reponseFn();
          })

          // 갤러리클릭 버튼
          $galleryClick.each(function(idx){
            $(this).on({
              click:function(){
                if(!$galleryLi.is(':animated')){
                  galleryBtnNum = idx;
                  $galleryClick.removeClass('s5AddClick');
                  $(this).addClass('s5AddClick');
                  reponseFn();
                }
              }
            })
          })

          // 마우스 호버했을시에 확대
          $galleryLi.each(function(idx){
            $(this).on({
              mouseenter:function(){
                $('#section5 a.gallery-content').eq(idx).stop().css({transform:'scale(1.1)'})
              },
              mouseleave:function(){
                $('#section5 a.gallery-content').eq(idx).stop().css({transform:'scale(1)'})
              }
            })
          })
          
          
        }
        

    }
    brando.init();

})(jQuery);