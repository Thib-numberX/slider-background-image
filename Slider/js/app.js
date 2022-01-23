const index=0;
const slider = {

    
    sliderImages :[
        'image1',
        'image2',
        'image3'
    ],
    
    // indexCurrentImage : slider.sliderImages,
    

    //  je veux inserer mes images dans le background image.
    // celles-ci doivent se changer quand j'appuie sur les boutons next et previous, puis revenir à la première ou à la dernière si on dépasse le tableau. Penser à travailler en méthode

    //je dois déjà cibler et poser un écouteur d'event sur mes boutons. 

    // init, commme initialisation

        init : function() {
            // ici les deux méthodes qui vont être créées :
            //création de l'image

            slider.createImage();

            //puis la méthode pour cibler et écouter les btn

            slider.addEvents();
        
        },

       

        //créer les images 
        
        createImage : function(index) {

            console.log (index);

            //cibler l'élément dans le DOM où va être insérer l'image
            const newImageBackElement = document.querySelector('.slider');
            const imageCurrent = slider.sliderImages;
            newImageBackElement.style.backgroundImage = "url(../image/" + imageCurrent[index] + ".jpg)";
            // console.log (newImageBackElement);

            // Il faut parcourir le tableau, un boucle for...of... et ainsi le stocker dans dans une variable

            // for ( const imageCurrent of slider.sliderImages){
            //     console.log (imageCurrent);
            // // il faut mettre un index à imageCurrent, le tableau indexé doit le permettre.
            // newImageBackElement.style.backgroundImage = "url(../image/" + imageCurrent + ".jpg)";
            //  //Si on utilise for ... in, nous avons l'index de récupéré.
            // // newImageBackElement.style.backgroundImage = "url(../image/image" + imageCurrent + ".jpg)";
            // //     console.log (newImageBackElement.style.backgroundImage);     
            // }       

        },

        
        // mettre en place l'action qui permettra de changer l'url

        addEvents : function(){
            // je crée un tableau stocké dans sliderButtons grâce au seletorAll('.btn). je les cible. Les deux btn sont sélectionnés.
            let sliderButtons = document.querySelectorAll('.btn');
            //je vérifie grâce à mon console.log :  c'est ok.
            // console.log(sliderButtons)

            // je dois donc stocké chaque btn dans une variable
            let btnPrevious = sliderButtons[0];
            let btnNext = sliderButtons[1];
            // je vérifie : ok
            // console.log(btnPrevious)
            // console.log(btnNext)
            
            // Maintenant que j'ai mes deux btn, je dois leur poser un event
            btnNext.addEventListener('click', slider.handleNextBtnClick);
            
            btnPrevious.addEventListener('click', slider.handlePreviousBtnClick);
        },
 
        handlePreviousBtnClick : function(evt){
            // Je vérifie dans la console que previsou apparait, et que donc que le click est bien écouté : Ok
             console.log('previous')

            // maintenant je dois changer l'image au click 

                let newBackImage = slider.indexCurrentImage -1;

                if (newBackImage < 0 ){

                    newBackImage = slider.sliderImages.length-1;
                }
                console.log (newBackImage);
            createImage(0);
        },

        handleNextBtnClick : function(evt){
            // Je vérifie dans la console que next apparait, et que donc que le click est bien écouté : Ok
              console.log('next')

            // maintenant je dois changer l'image au click : mais dans l'autre sens
            let newBackImage = slider.indexCurrentImage +1;

                if (newBackImage > slider.sliderImages.length+1 ){

                    newBackImage = 0;
                }
                console.log (newBackImage);
            createImage(newBackImage);
        },

    
        // togglesliderImage : function (newBackImageIndex){
        //     const newImageBackElement = document.querySelector('.slider');
        //     let sliderImage = slider.sliderImages[newBackImageIndex]

        //     newImageBackElement.style.backgroundImage = "url(../image/" + sliderImage + ".jpg)";
        
        // },
        
  
}

document.addEventListener( "DOMContentLoaded", slider.init );