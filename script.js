// =====================
// Countdown Timer
// =====================
// Đặt ngày kết thúc sự kiện ở đây (Năm, Tháng - 1, Ngày)
// Adjust countdown timer to 3 days from now
const countDownDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-timer").innerHTML = "<h4>Đã hết hạn!</h4>";
    }
}, 1000);

// =====================
// Form Submit + Popup
// =====================
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formspree-register-form");
    const thankyouPopup = document.getElementById("thankyou-popup");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault(); // chặn reload + redirect mặc định

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    // Hiện popup cảm ơn
                    thankyouPopup.style.display = "flex";
                    form.reset();
                } else {
                    alert("Có lỗi xảy ra, vui lòng thử lại!");
                }
            } catch (error) {
                alert("Không thể kết nối máy chủ, vui lòng thử lại!");
            }
        });
    }
});

document.getElementById('formspree-register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const hasAccount = formData.get('hasAccount'); // lấy giá trị dropdown

    document.getElementById('user-class').textContent = formData.get('class');
    document.getElementById('user-email').textContent = formData.get('email');
    document.getElementById('user-phone').textContent = formData.get('phone');

    if (hasAccount === 'yes') {
        // Ẩn toàn bộ đoạn tặng khóa học + tài khoản + ghi chú
        document.getElementById('new-account-info').style.display = 'none';
    } else {
        // Hiện lại khi chưa có tài khoản
        document.getElementById('new-account-info').style.display = 'block';
    }

    document.getElementById('thankyou-popup').style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function() {

    // =====================
    // Countdown Timer
    // =====================
    const countDownDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Cập nhật các phần tử, chỉ khi chúng tồn tại
        const daysEl = document.getElementById("days");
        if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
        const hoursEl = document.getElementById("hours");
        if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        const minutesEl = document.getElementById("minutes");
        if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        const secondsEl = document.getElementById("seconds");
        if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            const timerEl = document.querySelector(".countdown-timer");
            if (timerEl) timerEl.innerHTML = "<h4>Đã hết hạn!</h4>";
        }
    }, 1000);

    // =====================
    // Modal (Popup) Control
    // =====================
    const registrationModal = document.getElementById('registration-modal');
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const closeModalButton = document.querySelector('.close-button');

    if (registrationModal && openModalButtons.length > 0 && closeModalButton) {
        const openModal = (e) => {
            e.preventDefault();
            registrationModal.style.display = 'flex';
        };

        const closeModal = () => {
            registrationModal.style.display = 'none';
        };

        openModalButtons.forEach(button => button.addEventListener('click', openModal));
        closeModalButton.addEventListener('click', closeModal);
        
        // Đóng modal khi nhấp ra ngoài vùng form
        registrationModal.addEventListener('click', (e) => {
            if (e.target === registrationModal) {
                closeModal();
            }
        });
    }

    // =====================
    // Form Submit + Thank You Popup
    // =====================
    const form = document.getElementById("formspree-register-form");
    const thankyouPopup = document.getElementById("thankyou-popup");

    if (form && thankyouPopup) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); 
            const formData = new FormData(form);

            // Gửi dữ liệu đi (giả lập thành công ngay lập tức để demo)
            // Trong thực tế, bạn sẽ dùng fetch() để gửi đi
            // fetch(form.action, { method: "POST", body: formData, headers: {'Accept': 'application/json'}})
            // .then(response => { if(response.ok){ ... } })
            
            // Xử lý sau khi submit thành công
            const hasAccount = formData.get('hasAccount');
            
            // Điền thông tin vào popup cảm ơn
            document.getElementById('user-class').textContent = formData.get('class');
            document.getElementById('user-email').textContent = formData.get('email');
            document.getElementById('user-phone').textContent = formData.get('phone');

            if (hasAccount === 'yes') {
                document.getElementById('new-account-info').style.display = 'none';
            } else {
                document.getElementById('new-account-info').style.display = 'block';
            }

            // === THAY ĐỔI QUAN TRỌNG: Ẩn form đăng ký, hiện popup cảm ơn ===
            if (registrationModal) {
                registrationModal.style.display = 'none'; // Ẩn modal form
            }
            thankyouPopup.style.display = 'flex'; // Hiện popup cảm ơn
            
            form.reset();
        });
    }
});