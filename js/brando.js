;(function($){

    var brando = {
        init: function(){
            this.scrollFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.section13Fn();
            this.section14Fn();
            this.footerFn();
        },
        scrollFn:function(){
          var $headerH = $('#header .wrap .gap');
          var $wrapC = $('#header .wrap');
          var $headerBoreder = $('#header');
          var paralIf  = 0;
          var $skipUp   = $('#header .skip-up');
          var $skipaddWrap  = $('#header .skip-content .skip');
          var $skipWrap     = $('#header .container .skip-wrap');


          $(window).scroll(function(){
            if($(window).scrollTop() >= $('#section1').offset().top && $(window).scrollTop() < $('#section2').offset().top){
              $skipaddWrap.removeClass('hSkipClick');
            }else if($(window).scrollTop() >= $('#section2').offset().top && $(window).scrollTop() <= $('#section3').offset().top){
              $skipaddWrap.removeClass('hSkipClick');
              $skipaddWrap.eq(0).addClass('hSkipClick');
            }else if($(window).scrollTop() >= $('#section3').offset().top && $(window).scrollTop() <= $('#section4').offset().top){
              $skipaddWrap.removeClass('hSkipClick');
              $skipaddWrap.eq(1).addClass('hSkipClick');
            }else if($(window).scrollTop() >= $('#section5').offset().top && $(window).scrollTop() <= $('#section6').offset().top){
              $skipaddWrap.removeClass('hSkipClick');
              $skipaddWrap.eq(2).addClass('hSkipClick');
            }else if($(window).scrollTop() >= $('#section8').offset().top && $(window).scrollTop() <= $('#section9').offset().top){
              $skipaddWrap.removeClass('hSkipClick');
              $skipaddWrap.eq(3).addClass('hSkipClick');
            }else if($(window).scrollTop() >= $('#section10').offset().top && $(window).scrollTop() <= $('#section11').offset().top){
              $skipaddWrap.removeClass('hSkipClick');
              $skipaddWrap.eq(4).addClass('hSkipClick');
            }else if($(window).scrollTop() >= $('#section13').offset().top && $(window).scrollTop() <= $('#section14').offset().top){
              $skipaddWrap.removeClass('hSkipClick');
              $skipaddWrap.eq(5).addClass('hSkipClick');
            }

            if( $(window).scrollTop() >= $('#section1').offset().top  ){
              if(paralIf==0){
                paralIf=1;
                $skipWrap.css({top:'60px'});
                $headerH.css({padding:'15px 15px'});
                $wrapC.css({background:'#000'});
                $headerBoreder.css({'border-bottom':'0px'});
                $skipUp.addClass('hedAddBlock');
              }
            }
            if( $(window).scrollTop() === 0 ){
              paralIf=0;
              $skipWrap.css({top:'70px'});
              $headerH.css({padding:'22.5px 15px'});
              $wrapC.css({background:'transparent'});
              $headerBoreder.css({'border-bottom':'1px solid rgb(98,98,98)'});
              $skipUp.removeClass('hedAddBlock');
            }
          });
        },
        headerFn:function(){
          
          var $skipBtn = $('#header .skip-content .skip > a');
          var $skipaddWrap  = $('#header .skip-content .skip');
          var skipArray = [2,4,5,9,11,14];
          var skipIf = 0;
          var $imgContent = $('#header .img-content');
          var $skipUpBtn = $('#header .skip-up-btn');
          var $skipWrap     = $('#header .container .skip-wrap');
          var $hamBtn     = $('.container .hamberger-wrap');
          var p = 0;
          var winW = $(window).innerWidth();
          var pcMobile = 0; // 0 = pc  1 = mobile

          function resizeFn(){
            winW = $(window).innerWidth();
            
            if(winW <=1000){
              pcMobile = 1;
              p = 0;
            }else if(winW > 1000){
              pcMobile = 0;
              p = 1;
            }
            if(pcMobile == 0){
              $skipWrap.stop().show();
            }
            if(pcMobile == 1 ){
              $skipWrap.stop().hide();
            }
          }

          $(window).resize(function(){
            resizeFn();
          })

          $skipBtn.each(function(idx){
            $(this).on({
              click:function(){
                $skipaddWrap.removeClass('hSkipClick');
                $skipaddWrap.eq(idx).addClass('hSkipClick');
                if(skipIf>=$('#section'+skipArray[idx]).offset().top){
                  skipIf = $('#section'+skipArray[idx]).offset().top;
                  if(idx == 0){
                    skipIf = $('#section'+skipArray[idx]).offset().top+1;
                  }
                }else{
                  skipIf = $('#section'+skipArray[idx]).offset().top+2;
                }
                $('html, body').stop().animate({scrollTop:skipIf},400);
              }
            })
          });

          $imgContent.on({
            click:function(){
              $skipaddWrap.removeClass('hSkipClick');
              $('html, body').stop().animate({scrollTop:0},400);
              skipIf=0;
            }
          });

          $skipUpBtn.on({
            click:function(){
              $skipaddWrap.removeClass('hSkipClick');
              $('html, body').stop().animate({scrollTop:0},400);
              skipIf=0;
            }
          });

          $skipBtn.each(function(i){
            $(this).on({
              click:function(){
                if(pcMobile==1){
                  $skipWrap.stop().hide();
                  p=0;
                }
              }
            })
          })

          $hamBtn.on({
            click:function(){
              if(p == 1){
                p = 0;
                $skipWrap.stop().hide();
              }else if(p == 0){
                p = 1;
                $skipWrap.stop().show();
              }
            }
          })

          
        },
        section1Fn:function(){
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide     = $('#section1 .slide');
            var $window     = $(window);
            var $winW      = $window.width();
            var $winH      = $window.innerHeight();
            var cnt        = 0;
            var pageCnt    = 0;
            var $pageBtnGap   = $('#section1 .page-btn-gap');
            var $pageBtn   = $('#section1 .page-btn');

            
            function responseFn(){
              $winW = $window.width();
              $winH = $window.innerHeight();
              $slide.css({width:$winW,height:$winH})
              mainSlideFn();
            }
            setTimeout(responseFn,100);
            responseFn();
            
            $window.resize(function(){
              responseFn();
            })

            function mainSlideFn(){
              $slideWrap.stop().animate({left:cnt*-$winW},400,function(){
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
            var touchYstart = 0;
            var touchYend = 0;
            var mouseDown = false;

            $slideWrap.on({
              mousedown:function(e){
                e.preventDefault();
                mouseDown = true;
                touchStart = e.pageX; 
                touchYstart = e.pageY;
              },
              touchstart:function(e){
                e.preventDefault();
                mouseDown = true;
                touchStart  = e.originalEvent.changedTouches[0].clientX;
                touchYstart = e.originalEvent.changedTouches[0].clientY;
              },
              mouseup:function(e){
                e.preventDefault();
                mouseDown = false;
                touchEnd = e.pageX;
                touchYend = e.pageY;
                touchSwipeFn();

                if( touchYstart-touchYend < -50 ){
                  $('html,body').stop().animate({scrollTop: 0}, 1000);
                }
                if( touchYstart-touchYend > 50 ){
                  $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 1000);
                }
              },
              touchend:function(e){
                e.preventDefault();
                mouseDown = false;
                touchEnd  = e.originalEvent.changedTouches[0].clientX;
                touchYend = e.originalEvent.changedTouches[0].clientY;
                touchSwipeFn();

                if( touchYstart-touchYend < -50 ){
                  $('html,body').stop().animate({scrollTop: 0}, 1000);
                }
                if( touchYstart-touchYend > 50 ){
                  $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 1000);
                }
              }, 
              mouseleave:function(e){
                e.preventDefault();
                if( mouseDown == true ){
                  mouseDown = false;
                  touchEnd = e.pageX;
                  touchSwipeFn();
                }
              }
            });
            
            function touchSwipeFn(){
              console.log(touchStart);
              console.log(touchEnd);
              if(touchStart>=touchEnd && $winW/2<touchStart){
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
          var $container = $('#section2 .container');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section2').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.addClass('addpal2');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpal2');
              }
            }
          });

        },
        section3Fn:function(){
          var $number = $('#section3 .number');
          var cnt = [0,0,0,0];
          var setId = [null,null,null,null];
          var pallarIf = 0;
              
                function count0Fn(){
                    cnt[0] += 9;
                    if(cnt[0]>785){
                        clearInterval(setId[0]);
                        $number.eq(0).text(785);
                    }
                    else{
                        $number.eq(0).text(cnt[0]);
                    }
                  }
                  function count1Fn(){
                    cnt[1]+= 13;
                    if(cnt[1]>987){
                        clearInterval(setId[1]);
                        $number.eq(1).text(987);
                    }
                    else{
                        $number.eq(1).text(cnt[1]);
                    }
                  }
                  function count2Fn(){
                    cnt[2]+= 5;
                    if(cnt[2]>350){
                        clearInterval(setId[2]);
                        $number.eq(2).text(350);
                    }
                    else{
                        $number.eq(2).text(cnt[2]);
                    }
                  }
                  function count3Fn(){ 
                    cnt[3]+= 2;
                    if(cnt[3]>166){
                        clearInterval(setId[3]);
                        $number.eq(3).text(166);
                    }
                    else{
                        $number.eq(3).text(cnt[3]);
                    }
                  }  
                  
                  $(window).scroll(function(){
                    if( $(window).scrollTop() >= $('#section3').offset().top-600 ){
                        if(pallarIf==0){
                          pallarIf=1;
                          setId[0] = setInterval(count0Fn,90);
                          setId[1] = setInterval(count1Fn,104);
                          setId[2] = setInterval(count2Fn,114);
                          setId[3] = setInterval(count3Fn,96);
                        }
                    }
                    if( $(window).scrollTop() == 0){
                      if(pallarIf==1){
                        pallarIf=0;
                        setId = [null,null,null,null];
                        cnt = [0,0,0,0];
                        clearInterval(setId[0]);
                        clearInterval(setId[1]);
                        clearInterval(setId[2]);
                        clearInterval(setId[3]);
                      }
                    }
                });

              
  
              

        },
        section4Fn:function(){
          var $container = $('#section4 .container');
          var $winW = $(window).innerWidth();
          var pallarIf = 0;
          var section4Top = $('#section4').offset().top; //섹션4의 탑값
          var section5Top = $('#section5').offset().top; //섹션4의 탑값
          var imgTop      = 50;
          var $backImg = $('.back-img');
          var oldScrollTop = 0; //이전 스크롤 값
          var newScrollTop = 0; //새로운 스크롤 값
          var t = 0;

          function responseFn(){
            $winW = $(window).innerWidth();
            console.log($winW);
          }
          setTimeout(responseFn,100);
          responseFn();
          
          $(window).resize(function(){
            responseFn();
          })

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section4').offset().top-750  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.addClass('addpal4');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpal4');
              }
            }
          });
          function scrollasdFn(){
            if( $(window).scrollTop() >= section4Top-200  &&  $(window).scrollTop() < section5Top-200 ){

              newScrollTop = $(window).scrollTop();
            
              if( (oldScrollTop-newScrollTop) > 0  ){
                  imgTop+=1;
                  $backImg.css({background:'url(./img/sect4bg.jpg) no-repeat 50% '+imgTop+'% fixed'});
              }
              if( (oldScrollTop-newScrollTop) < 0  ){
                  imgTop-=1;
                  $backImg.css({background:'url(./img/sect4bg.jpg) no-repeat 50% '+imgTop+'% fixed'});
                  if(imgTop <= 0){imgTop= 50;}
              }
              oldScrollTop = newScrollTop;
            }
          }
          
            $(window).scroll(function(){
              if($winW >768){
                scrollasdFn();
              }else if($winW <=768){
                imgTop = 50;
              }
            })

        },
        section5Fn:function(){

          var $galleryLi = $('#section5 ul.gallery li.col');   // 갤러리 포지션 영역
          var $galleryClick = $('#section5 li.tap-btn-gap');  // 애드클래스 영역 an 버튼영역
          var $MogalleryClick = $('#section5 li.tap-btn-gap > a.tap-btn');  // 애드클래스 영역 an 버튼영역
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
          var k = -1;
          var show = [];
          var hide = [];

          var $gallcontentGapW = ($winW-60*cols)/cols;

          var $container = $('#section5 .container .tap-row');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section5').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.addClass('addpal5');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpal5');
              }
            }
          });


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
              show = [0,1,2,3,4,5,6,7];
              hide = [];
            }else if(galleryBtnNum == 1 ){
              show = [1,3,4,5,6]
              hide = [0,2,7];
            }else if(galleryBtnNum == 2 ){
              show = [0,1,3,4,7]
              hide = [2,5,6];
            }else if(galleryBtnNum == 3 ){
              show = [0,2,3,4,6];
              hide = [1,5,7];
            } else if(galleryBtnNum == 4 ){
              show = [1,2,4,5,7];
              hide = [0,3,6];
            }

            $gallcontentGapW = ($winW-60*cols)/cols;
            galleryConW  = $winW/cols;
            galleryConH  = galleryConW;
            imgN = show.length;
            rows         = Math.ceil(imgN/cols);

            //전체 ul 반응형 크기조절
            $galleryUl.css({width:$winW,height:galleryConH*rows});

            // img 반응형 크기 조절
            $galleryLi.css({width:galleryConW,height:galleryConW});

            //img안의 텍스트박스 반응형 크기조절
            $gallcontentGap.css({width:$gallcontentGapW,height:$gallcontentGapW});


            $galleryLi.removeClass('s5AddZoom');

            k=-1;
            for(var i = 0; i<rows; i++){
              for(var j = 0; j <cols; j++){
                k++;
                if(k==imgN){break;}
                $galleryLi.eq(show[k]).stop().show().animate({left:Math.round(galleryConW*j),top:galleryConW*i},600,'easeInOutExpo');
              }
            }

            //show
            for(var i =0; i<imgN; i++){
              $galleryLi.eq(show[i]).addClass('s5AddZoom');
            }
            //hide
            setTimeout(function(){
              for(var i = 0;i<8-imgN;i++){  
                $galleryLi.eq(hide[i]).stop().hide();
              }
            },400)

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
                    $MogalleryClick.removeClass('s5AddClick');
                    $MogalleryClick.eq(idx).addClass('s5AddClick');
                    reponseFn();
                  }
                }
              })
            })

          // 마우스 호버했을시에 확대
          $galleryLi.each(function(idx){
            $(this).on({
              mouseenter:function(){
                $('#section5 ul.gallery li').eq(idx).addClass('s5AddZoom2');
              },
              mouseleave:function(){
                $('#section5 ul.gallery li').eq(idx).removeClass('s5AddZoom2');
              }
            })
          })
          
          
        },
        section6Fn:function(){
          var $Li = $('#section6 li');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section6').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $Li.eq(0).addClass('addpal61');
                $Li.eq(1).addClass('addpal62');
                $Li.eq(2).addClass('addpal63');
                $Li.eq(3).addClass('addpal64');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $Li.eq(0).removeClass('addpal61');
                $Li.eq(1).removeClass('addpal62');
                $Li.eq(2).removeClass('addpal63');
                $Li.eq(3).removeClass('addpal64');
              }
            }
          });

        },
        section7Fn:function(){
          var $bar = $('#section7 .bar-content .fill');
          var $container = $('#section7 .container');
          var pallarIf = 0;
          var $winW = $(window).innerWidth();
          var $cubeW = $('#section7 .cube');
          var $faceFront = $('#section7 .front');
          var $faceBack = $('#section7 .back');
          var $faceRight = $('#section7 .right');
          var $faceLeft = $('#section7 .left');
          var $faceTop = $('#section7 .top');
          var $faceBottom = $('#section7 .bottom');

          // function resizeFn(){
          //   $winW = $(window).innerWidth();
          //   $cubeW.css({width:$winW/7.612,height:$winW/7.612});
          //   $faceFront.css({transform:'rotateY(  0deg) translateZ('+$winW/15.224+'px)'})
          //   $faceBack.css({transform:'rotateY( 180deg) translateZ('+$winW/15.224+'px)'})
          //   $faceRight.css({transform:'rotateY( -90deg) translateZ('+$winW/15.224+'px)'})
          //   $faceLeft.css({transform:'rotateY( 90deg) translateZ('+$winW/15.224+'px)'})
          //   $faceTop.css({transform:'rotateX(  90deg) translateZ('+$winW/15.224+'px)'})
          //   $faceBottom.css({transform:'rotateX( -90deg) translateZ('+$winW/15.224+'px)'})
          //   console.log($winW);
          // }
          // setTimeout(resizeFn,20);
          // $(window).resize(function(){
          //   resizeFn();
          // })
          


          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section7').offset().top-700  ){
              if(pallarIf==0){
              pallarIf = 1;
              $container.addClass('addpal7');
                $bar.eq(0).stop().animate({width:'80%'},1000);
                $bar.eq(1).stop().animate({width:'90%'},1000);
                $bar.eq(2).stop().animate({width:'95%'},1000);
                $bar.eq(3).stop().animate({width:'90%'},1000);
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpal7');
                  $bar.eq(0).stop().animate({width:'0%'},0);
                  $bar.eq(1).stop().animate({width:'0%'},0);
                  $bar.eq(2).stop().animate({width:'0%'},0);
                  $bar.eq(3).stop().animate({width:'0%'},0);
              }
            }

            });
        },
        section8Fn:function(){
          var $containerLi = $('#section8 ul.container > li');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section8').offset().top-700  ){
              if(pallarIf==0){
                console.log('gd');
                pallarIf = 1;
                $containerLi.eq(0).addClass('addpal81');
                $containerLi.eq(1).addClass('addpal82');
                $containerLi.eq(2).addClass('addpal83');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $containerLi.eq(0).removeClass('addpal81');
                $containerLi.eq(1).removeClass('addpal82');
                $containerLi.eq(2).removeClass('addpal83');
              }
            }
          });

        },
        section9Fn:function(){
          var $number = $('#section9 .number');
          var cnt = [0,0,0];
          var setId = [null,null,null];
          var pallarIf = 0;
              
                function count0Fn(){
                    cnt[0] += 2;
                    if(cnt[0]>105){
                        clearInterval(setId[0]);
                        $number.eq(0).text(105);
                    }
                    else{
                        $number.eq(0).text(cnt[0]);
                    }
                  }
                  function count1Fn(){
                    cnt[1]+= 3;
                    if(cnt[1]>185){
                        clearInterval(setId[1]);
                        $number.eq(1).text(185);
                    }
                    else{
                        $number.eq(1).text(cnt[1]);
                    }
                  }
                  function count2Fn(){
                    cnt[2]+= 5;
                    if(cnt[2]>350){
                        clearInterval(setId[2]);
                        $number.eq(2).text(350);
                    }
                    else{
                        $number.eq(2).text(cnt[2]);
                    }
                  }
                  
                  $(window).scroll(function(){
                    if( $(window).scrollTop() >= $('#section9').offset().top-600 ){
                        if(pallarIf==0){
                          pallarIf=1;
                          setId[0] = setInterval(count0Fn,124);
                          setId[1] = setInterval(count1Fn,104);
                          setId[2] = setInterval(count2Fn,92);
                        }
                    }
                    if( $(window).scrollTop() == 0){
                      if(pallarIf==1){
                        pallarIf=0;
                        setId = [null,null,null];
                        cnt = [0,0,0];
                        clearInterval(setId[0]);
                        clearInterval(setId[1]);
                        clearInterval(setId[2]);
                      }
                    }
                });
        },
        section10Fn:function(){
          //넓이 x 1.11111 = 높이

          var liContent = $('#section10 li.content');
          var $window = $(window);
          var winW  = $window.innerWidth();
          var imgH = imgW*1.11111;
          var imgW = winW/4;

          var $container = $('#section10 .content-wrap li');
          var pallarIf = 0;

         

          function responseFn(){
            winW  = $window.innerWidth();
            if(winW<2000 && winW>1000){
              imgW = winW/4;
            }else if(winW<=1000 && winW>760){
              imgW = winW/2;
            }else if(winW<760){
              imgW = winW/1;
            }
            imgH = imgW*1.11111;

            liContent.each(function(idx){
              $(this).css({width:imgW,height:imgH});
            })
          }
          setTimeout(responseFn,100);

          $window.resize(function(){
            responseFn();
          })

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section10').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.eq(0).addClass('addpal100');
                $container.eq(1).addClass('addpal101');
                $container.eq(2).addClass('addpal102');
                $container.eq(3).addClass('addpal103');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.eq(0).removeClass('addpal100');
                $container.eq(1).removeClass('addpal101');
                $container.eq(2).removeClass('addpal102');
                $container.eq(3).removeClass('addpal103');
              }
            }
          });
          
        },
        section11Fn:function(){
          var $container = $('#section11 .container');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section11').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.addClass('addpal11');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpal11');
              }
            }
          });

        },
        section12Fn:function(){

          var $moveGal = $('#section12 .move-gal');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section12').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $moveGal.eq(0).addClass('addpal120');
                $moveGal.eq(1).addClass('addpal121');
                $moveGal.eq(2).addClass('addpal122');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $moveGal.eq(0).removeClass('addpal120');
                $moveGal.eq(1).removeClass('addpal121');
                $moveGal.eq(2).removeClass('addpal122');
              }
            }
          });

          $moveGal.each(function(idx){
            $(this).on({
              mouseenter:function(){
                console.log('gd');
                $('#section12 .move-gal'+idx+' .bg-img-wrap').stop().animate({opacity:0.8},300)
              },
              mouseleave:function(){
                $('#section12 .move-gal'+idx+' .bg-img-wrap').stop().animate({opacity:0},300)
              }
            })
          })

        },
        section13Fn:function(){
          var $container = $('#section13 .container .content-wrap');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section13').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.addClass('addpal131');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpal131');
              }
            }
          });

        },
        section14Fn:function(){
          var $sumbBtn = $('#section14 #submitBtn');
          var $msg      = $('#section14 .msg-wrap .msg-gap p');
          var $frmName = $('#section14 #frm-name');
          var $frmEmail = $('#section14 #frm-email');
          var $frmMessage = $('#section14 #frm-message');
          var $container = $('#section14 .container');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#section14').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.addClass('addpal141');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpal141');
              }
            }
          });
          

          $sumbBtn.on({
            click:function(e){
              e.preventDefault();
              $frmName.removeClass('addajax');
              $frmEmail.removeClass('addajax');
              $frmMessage.removeClass('addajax');

              var $frmNameVal = $('#section14 #frm-name').val();
              var $frmEmailVal = $('#section14 #frm-email').val();
              var $frmMessageVal = $('#section14 #frm-message').val();
              var $questionVal = $('#question option:selected').val();

              if($frmNameVal == ''){
                $frmName.addClass('addajax');
                return false;

              }else if($frmEmailVal == ''){
                $frmEmail.addClass('addajax');
                return false;

              }else if($frmMessageVal == ''){
                $frmMessage.addClass('addajax');
                return false;
                
              }else{
                $frmName.removeClass('addajax');
                $frmEmail.removeClass('addajax');
                $frmMessage.removeClass('addajax');
                
                $.ajax({
                  url:'./php/response.php',
                  type:'POST',
                  data:{
                    email : $frmEmailVal,
                    name : $frmNameVal,
                    message :$frmMessageVal,
                    question : $questionVal
                  },
                  success: function(result){
                    console.log(result);
                    $msg.html(result);
                    $msg.fadeIn(1000);
                    setTimeout(msgFn, 6000);

                    function msgFn(){
                      $frmName.val('');
                      $frmEmail.val('');
                      $frmMessage.val('');
                      $msg.html('');

                      $frmName.removeClass('addajax');
                      $frmEmail.removeClass('addajax');
                      $frmMessage.removeClass('addajax');

                      $msg.fadeOut(1000);
                      $frmName.focus();
                    }
                  },
                  error: function(msg){
                    console.log('AJAX 전송 실패!!!');
                    console.log($frmEmailVal);
                    console.log($frmNameVal);
                    console.log($frmMessageVal);
                    console.log($questionVal);
                    $msg.fadeIn(1000);
                    $msg.html(' Validation errors occurred. Please confirm the fields and submit it again.');
                  }
                })
              }
            }
          })
        },
        footerFn:function(){
          var $container = $('#footer .footer-top-wrap');
          var pallarIf = 0;

          $(window).scroll(function(){
            if( $(window).scrollTop() >= $('#footer').offset().top-700  ){
              if(pallarIf==0){
                pallarIf = 1;
                $container.addClass('addpalfo');
              }
            }
            if( $(window).scrollTop() == 0 ){
              if(pallarIf==1){
                pallarIf = 0;
                $container.removeClass('addpalfo');
              }
            }
          });

        }
        

    }
    brando.init();

})(jQuery);