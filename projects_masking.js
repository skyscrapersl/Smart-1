var projectNames = [
                    'woolwortau', 'mdlzrusf', 'pngmx', 'pngbr',
                    'gskjp', 'ccaau', 'beiersdorfco', 'sinoth', 'diageous', 'pepsicoes',
                    'sanofies', 'diageotw'
                ];
(function () {
                    'use strict';
                    setTimeout(function () {
                        setInterval(function () {
                            var element = document.querySelector('.queueSelected');

                            if (element && element.textContent.trim() === 'Masking') {
                                console.log('yes');
                                $.each(projectNames, function (index, projectName) {
                                    $(".project-name.trax-tst-homepage-queue-Fbox-title:contains('" + projectName + "')").closest(".homepage-queue-box-container").css("background-color", "#FF5757");
                                });
                            } else {
                                $.each(projectNames, function (index, projectName) {
                                    $(".project-name.trax-tst-homepage-queue-Fbox-title:contains('" + projectName + "')").closest(".homepage-queue-box-container").css("background-color", "#eee");
                                });
                                console.log('no');
                            }
                        }, 1000 * 2);
                    }, 8);

                })();
