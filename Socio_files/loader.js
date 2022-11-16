(
    async function load() {
        $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
        var data = JSON.stringify(data, null, 2);
        console.log("ppp "+data[0].ipAddress)
        console.log("aaaa"+JSON.stringify(data));
        });
        let url = 'https://cybot.co/static/chatbox';
        // let url = 'http://49.50.68.190/static/chatbox';
        // let url = '';
        let head = document.getElementsByTagName('head')[0];
        let body = document.getElementsByTagName('body')[0];

        head.innerHTML += `<link rel="stylesheet" data-id="chatbox-css" href="${url}/static/styles.css">`;
        head.innerHTML += '<link rel="preconnect" href="https://fonts.gstatic.com">';
        head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>';

        chatbot_html = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            div#mic-btn {
                position: relative;
                width: 30px;
                height: 30px;
                text-align: center;
            }
        
            div#mic-btn img {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 120px !important;
                height: 120px !important;
                transform: translate(-50%, -50%);
                max-width: initial;
            }
        
            div#mic-btn i {
                line-height: 30px;
                cursor: pointer;
            }
        </style>
        <div>
            <div class="chatbox" style="display:none;">
                <div class="chatbox-header">
                    <div class="chatbox-header-left">
                        <div class="chatbox-avatar"><img alt="" class="chakra-image css-0"
                                src="https://cybot.co/static/chatbox/static/assets/chatbot-header.png">
                        </div>
                        <div class="chatbox-user">
                            <div class="chatbox-user-name"></div>
                            <div class="div">
                                <span class="chatbox-user-status-circle"></span>
                                <div class="chatbox-user-status" style="display: inline-block">Online</div>
                            </div>
                        </div>
                    </div>
                    <div class="chatbox-settings">                        
                        <a href="javascript:void(0)" id="chatbox-settings-minimize">
                            <img src="https://cybot.co/static/chatbox/static/assets/minus-icon.png">
                        </a> &nbsp
                        <a href="javascript:void(0)" id="chatbox-settings-closechat" style="color:white; text-decoration:none">
                            X
                        </a> 
                    </div>
                </div>
                <div class="chatbox-body">
                    <div class="chatbox-user-form" style="display: none;">
                        <form method="POST" id="chatbox-form">
                            <label for="name">Name</label>
                            <input type="text" name="name" placeholder="Your Name" pattern="^[a-zA-Z]{1,}[\s]*[a-zA-Z]{0,}"
                                minlength="1" maxlength="30" autocomplete="name" autocapitalize="words"
                                oninvalid="setCustomValidity('Please enter Alphabets only. Length: 1-30')"
                                onkeypress="try{setCustomValidity(''); }catch(e){ console.log(e)}"
                                onchange="try{setCustomValidity(''); }catch(e){ console.log(e)}" required="true">
                            <label for="name">Email</label>
                            <input type="email" name="email" placeholder="Email"
                                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" autocomplete="email"
                                oninvalid="setCustomValidity('Please enter a valid email address')"
                                onkeypress="try{setCustomValidity(''); }catch(e){ console.log(e)}"
                                onchange="try{setCustomValidity(''); }catch(e){ console.log(e)}" required="true">
                            <label for="name">Phone</label>
                            <input type="text" name="phone" placeholder="Phone Number" pattern="[0-9]{10}" minlength="10"
                                maxlength="10" oninvalid="setCustomValidity('Please enter a valid phone number. Length: 10')"
                                onkeypress="try{setCustomValidity(''); }catch(e){ console.log(e)}"
                                onchange="try{setCustomValidity(''); }catch(e){ console.log(e)}" autocomplete="phone"
                                required="true">
        
                            <!-- <input type="submit" value="Go"> -->
                            <button type="submit" id="chatbox-form-btn">
                                <span>Go</span>
                                <img src='https://cybot.co/static/chatbox/static/assets/ellipsis-white.svg' alt=""
                                    class="chatbox-submit-img" style="display: none;" />
                            </button>
                        </form>
                    </div>
                    <div class="chatbox-messages-wrapper">
                        <div class="chatbox-messages">
                        </div>
                        <div class="chatbox-suggestions">
                            <!-- <div class="chatbox-suggestion">
                                <span>
                                    Hello, how are you?
                                </span>
                            </div>
                            <div class="chatbox-suggestion">
                                <span>Hello, what are you doing?</span>
                            </div> -->
                        </div>
                        <img alt="" src="https://cybot.co/static/chatbox/static/assets/ellipsis-color.svg"
                            id="chatbox-typing" style="display:none;">
                        <div class="chatbox-io">
                            <input id="file-opener" type="file"
                                accept="application/pdf,image/*,video/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                style="display:none" />
                            <button id="attach-btn" onclick="document.querySelector('#file-opener').click();">
                                <?xml version="1.0" encoding="iso-8859-1"?>
                                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height="24"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                    style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M464.059,61.567c-63.811-63.814-167.646-63.814-231.468,0L34.183,259.974c-45.579,45.584-45.576,119.753,0.006,165.334
                    c22.793,22.793,52.723,34.189,82.665,34.186c29.934-0.003,59.88-11.396,82.669-34.186l181.868-181.873
                    c13.25-13.248,20.548-30.863,20.55-49.599c0-18.737-7.295-36.351-20.547-49.603c-27.352-27.349-71.856-27.348-99.202,0.005
                    L163.257,263.17c-9.131,9.13-9.131,23.935-0.002,33.067c9.13,9.133,23.935,9.13,33.067,0l118.936-118.933
                    c9.117-9.117,23.949-9.119,33.067-0.002c4.416,4.416,6.849,10.288,6.849,16.533c0,6.245-2.432,12.115-6.849,16.533L166.456,392.24
                    c-27.351,27.348-71.851,27.352-99.2,0.002c-27.349-27.351-27.351-71.853-0.005-99.204L265.658,94.634
                    c45.586-45.584,119.755-45.584,165.334,0c22.083,22.08,34.245,51.439,34.245,82.666s-12.163,60.586-34.245,82.668l-198.404,198.41
                    c-9.13,9.131-9.13,23.935,0.002,33.067c4.566,4.567,10.55,6.848,16.533,6.848c5.984,0,11.968-2.284,16.534-6.848l198.401-198.409
                    c30.916-30.913,47.941-72.015,47.942-115.735C512,133.582,494.974,92.48,464.059,61.567z" />
                                        </g>
                                    </g>
                                </svg>
        
                            </button>
                            <div class="chatbox-input">
                                <input type="text" name="message" id="message" placeholder="Type here..."
                                    autocapitalize="sentences">
                            </div>
                            <button id="hello-btn">
                                <svg id="Layer_1" enable-background="new 0 0 499.859 499.859" height="36"
                                    viewBox="0 0 499.859 499.859" width="512" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path
                                            d="m469.223 270.371c9.237-9.218 14.329-21.48 14.335-34.53.007-13.05-5.071-25.318-14.298-34.546-4.7-4.7-10.137-8.235-15.946-10.611l20.045-19.969c9.258-9.214 14.365-21.481 14.38-34.543s-5.062-25.342-14.298-34.578l-.519-.519c-7.127-7.127-15.937-11.584-25.169-13.37.56-2.968.857-6.007.86-9.094.015-13.06-5.063-25.339-14.298-34.573l-.637-.637c-9.221-9.221-21.48-14.299-34.52-14.299-8.804 0-17.248 2.323-24.645 6.665-2.409-6.522-6.211-12.503-11.268-17.559l-.42-.422c-19.033-19.03-50.004-19.033-69.039.001l-130.455 130.457 16.204-66.917c6.402-26.44-8.045-53.401-33.605-62.715-14.384-5.242-30.346-4.048-43.792 3.271s-23.112 20.077-26.52 35.003l-2.222 9.736c-10.628 46.555-28.196 93.338-52.216 139.046-17.999 34.25-24.854 74.305-19.302 112.787 5.744 39.816 23.855 75.938 52.376 104.458 35.01 35.011 81.542 54.286 131.049 54.284h.126c49.552-.032 96.113-19.373 131.105-54.458l37.349-37.448zm-173.93 131.182c-29.328 29.406-68.353 45.616-109.883 45.644h-.106c-41.491 0-80.495-16.155-109.837-45.497-23.906-23.905-39.085-54.173-43.897-87.528-4.656-32.273 1.086-65.852 16.167-94.549 25.228-48.006 43.702-97.237 54.907-146.325l2.222-9.735c1.514-6.633 5.639-12.077 11.615-15.33s12.789-3.761 19.18-1.433c11.194 4.079 17.522 15.887 14.718 27.467l-28.77 118.803c-3.413 12.246 12.364 25.887 25.185 14.137l168.206-168.206c7.337-7.339 19.276-7.337 26.601-.014l.42.421c3.554 3.555 5.511 8.279 5.511 13.306s-1.958 9.752-5.511 13.307c-27.379 27.378-76.487 76.486-103.362 103.361-5.858 5.857-5.858 15.355 0 21.213s15.356 5.858 21.213 0c16.605-16.605 112.003-112.002 125.982-125.98 3.554-3.555 8.279-5.512 13.306-5.512s9.752 1.957 13.307 5.512l.637.637c3.56 3.56 5.517 8.293 5.512 13.327-.006 5.034-1.974 9.763-5.544 13.317-37.611 37.461-89.049 88.677-126.281 125.783-5.87 5.847-5.888 15.344-.042 21.214 2.931 2.942 6.778 4.414 10.627 4.414 3.829 0 7.659-1.457 10.585-4.372 25.028-24.931 93.218-92.857 117.168-116.678 7.337-7.301 19.261-7.287 26.581.031l.518.519c3.561 3.561 5.518 8.294 5.512 13.329s-1.975 9.764-5.548 13.32c-36.483 36.339-94.262 93.883-130.424 129.934-5.869 5.848-5.887 15.345-.04 21.214 2.931 2.941 6.778 4.413 10.626 4.413 3.829 0 7.66-1.458 10.586-4.373l68.783-68.524 9.78-9.68c7.337-7.262 19.245-7.229 26.544.068 3.557 3.557 5.514 8.286 5.511 13.316-.002 5.03-1.965 9.758-5.518 13.303l-115.365 114.945z" />
                                        <path
                                            d="m451.123 374.497c3.26-7.615-.271-16.433-7.886-19.692-7.616-3.262-16.433.27-19.693 7.886-5.032 11.754-12.214 22.345-21.346 31.477-11.157 11.156-24.34 19.323-39.184 24.274-7.859 2.621-12.105 11.116-9.484 18.976 2.096 6.284 7.948 10.258 14.228 10.258 1.573 0 3.173-.249 4.748-.774 19.3-6.438 36.428-17.042 50.906-31.521 11.845-11.847 21.169-25.602 27.711-40.884z" />
                                        <path
                                            d="m490.765 382.77c-7.615-3.264-16.433.261-19.697 7.876-7.009 16.349-17.003 31.079-29.704 43.78-14.772 14.772-32.148 25.807-51.644 32.796-7.798 2.796-11.854 11.384-9.058 19.183 2.196 6.126 7.967 9.941 14.121 9.941 1.68 0 3.389-.284 5.062-.884 23.698-8.496 44.804-21.895 62.732-39.823 15.412-15.411 27.545-33.301 36.064-53.173 3.264-7.614-.262-16.432-7.876-19.696z" />
                                    </g>
                                </svg> </button>
                            <div class="ab-mic-btn" id="mic-btn" onclick="runSpeechRecognition()">
                                <i class="fa fa-microphone"></i>
                            </div>
                            <button id="message-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path
                                        d="M7.47,62.62c-3.85,2-6.2.24-5.24-4L6.29,40.53a6,6,0,0,1,4.79-4.33l24.41-2.84c6.5-.74,6.52-2,0-2.71l-24.4-2.79A5.89,5.89,0,0,1,6.3,23.58L2.22,5.33c-1-4.23,1.38-6,5.24-3.95L58.11,28.29c3.85,2.05,3.86,5.36,0,7.41L7.46,62.62Z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div class="chatbox-feedback" style="display:none;">
                            <p>Please share your feedback about the chatbot</p>
                            <div class="chatbox-rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text"></label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text"></label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text"></label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text"></label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chatbox-footer">
                    <span>Powered by</span>
                    <span>⚡</span>
                    <a href="https://cybot.co" class="chatbox-company">Cybot</a>
                </div>
            </div>
            <div class="chatbox-bubble">
                <img src="https://cybot.co/static/chatbox/static/assets/chatbot.png" height="80" weight="80" alt="">
            </div>
            <div class="minimizeclose" style="display:none">
            <i>X</i>
            </div>
            <div class="minimize-chatbox" style="display:none">
            <p>Got any questions<br><strong>I'm happy to help</strong></p>
                <span><img src="https://cybot.co/static/chatbox/static/assets/cybot-icon.svg" alt=""></span>
            </div>
        </div>`
        node = document.createElement('div');
        node.innerHTML = chatbot_html;
        body.appendChild(node)
        // console.log(_chatbot.position);
        if (_chatbot.position == 'right') {
            document.querySelector('.chatbox').style.right = '20px';
            document.querySelector('.chatbox').style.left = 'initial';
            document.querySelector('.chatbox-bubble').style.right = '20px';
            document.querySelector('.chatbox-bubble').style.left = 'initial';
            document.querySelector('.chatbox-bubble').style['border-bottom-left-radius'] = '50%';
            document.querySelector('.chatbox-bubble').style['border-bottom-right-radius'] = '10px';
        }
        underscore = document.createElement('script');
        underscore.type = 'text/javascript';
        underscore.charset = 'utf-8';
        underscore.async = true;
        underscore.defer = true;
        underscore.src = `https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js`;
        body.appendChild(underscore);
        underscore.onload = () => {
            chatbot_js = document.createElement('script');
            chatbot_js.type = 'text/javascript';
            chatbot_js.charset = 'utf-8';
            chatbot_js.async = true;
            chatbot_js.defer = true;
            chatbot_js.src = `${url}/static/chatbot.js`;

            body.appendChild(chatbot_js);
        }

    }
)()