    <div class="bg-primary-custom py-4">
        <div class="container-fluid d-flex justify-content-between align-items-center">


            <div class="w-20 d-flex align-items-center ">
                <img src="public/image/logo-quizne.17652f6f.svg" alt="">
                <ul class="d-flex ms-5 align-items-center m-reset">
                    <li class="btn-number btn-number-active">1</li>
                    <li class="btn-number">2</li>
                    <li class="btn-number">3</li>
                    <li class="btn-number">4</li>
                    <li class="btn-number">5</li>
                </ul>
            </div>


            <div class="w-20 d-flex p-relative  time-bar align-items-center bg-white text-dark rounded-10">
                <i class="fa-solid fa-clock-rotate-left me-2"></i>
                <span>25 Giay</span>
                <div class="d-flex time-bar align-items-center bg-choice-custom text-white">
                    <i class="fa-solid fa-clock-rotate-left me-2"></i>
                    <span>25 Giay</span>
                </div>
            </div>

            <div class="w-20 d-flex align-items-center justify-content-between text-white">
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-file-invoice me-2"></i>
                    <span>5 Cau hoi</span>
                </div>

                <button type="button" class="btn-custom btn-primary-custom">Roi</button>
            </div>
        </div>
    </div>

    <div class="bg-secondary-custom w-100 py-3 px-3">
        <div class="container-fluid bg-primary-custom rounded py-3">
            <div class="bg-secondary-custom w-80 mx-auto rounded py-3 px-3 h-100">
                <div class="d-flex py-3 bg-primary-custom rounded w-100">
                    <div class="w-30 bg-primary-custom">
                        <img class="w-100" src="public/image/viet-nam-restaurant-rebrand-d7672e55af.jpeg" alt="">
                    </div>
                    <div class="w-70 d-flex align-items-center justify-content-center">
                        <p class="d-inline-block text-white">Ong tao ve troi bang cach nao ?</p>
                    </div>
                </div>

                <div class="d-flex mt-4 pb-5">
                    <div class="w-25 me-2 bg-primary-custom rounded px-2 py-2" style="height: 200px;">
                        <div
                            class="bg-secondary-custom bg-success-custom rounded h-100 d-flex justify-content-center align-items-center text-white">
                            <p>Loremodit.</p>
                        </div>
                    </div>

                    <div class="w-25 me-2 bg-primary-custom rounded px-2 py-2" style="height: 200px;">
                        <div
                            class="bg-secondary-custom bg-dannger-custom rounded h-100 d-flex justify-content-center align-items-center text-white">
                            <p>Loremodit.</p>
                        </div>
                    </div>

                    <div class="w-25 me-2 bg-primary-custom rounded px-2 py-2" style="height: 200px;">
                        <div
                            class="bg-secondary-custom bg-choice-custom rounded h-100 d-flex justify-content-center align-items-center text-white">
                            <p>Loremodit.</p>
                        </div>
                    </div>

                    <div class="w-25 me-2 bg-primary-custom rounded px-2 py-2" style="height: 200px;">
                        <div
                            class="bg-secondary-custom rounded h-100 d-flex justify-content-center align-items-center text-white">
                            <p>Loremodit.</p>
                        </div>
                    </div>




                </div>

                <div class="line-border mb-3"></div>
            </div>


        </div>
    </div>


    <script>
        let seconds = 25;
        const elementTimeFirst = document.querySelector(".time-bar span");
        const elementTimeSecond = document.querySelector(".time-bar div span");
        const elementTimeBar= document.querySelector(".time-bar div");

        function updateCountdown() {
            elementTimeFirst.textContent = seconds + " Giay";
            elementTimeSecond.textContent = seconds + " Giay";
            elementTimeBar.style.width = `${seconds*4}%`;
            seconds--;
            if (seconds < 0) {
                clearInterval(countdownTimer);
            }
        }
        const countdownTimer = setInterval(updateCountdown, 1000);

    </script>
