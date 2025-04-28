document.addEventListener('DOMContentLoaded', () => {
    // Animasi untuk tombol saat hover
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Animasi untuk gambar profil
    const profileImg = document.querySelector('.profile-img');
    profileImg.style.opacity = '0';
    profileImg.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        profileImg.style.transition = 'all 0.5s ease';
        profileImg.style.opacity = '1';
        profileImg.style.transform = 'scale(1)';
    }, 500);

    // Animasi untuk teks
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    
    h1.style.opacity = '0';
    p.style.opacity = '0';
    
    setTimeout(() => {
        h1.style.transition = 'opacity 0.5s ease';
        p.style.transition = 'opacity 0.5s ease';
        h1.style.opacity = '1';
        p.style.opacity = '1';
    }, 1000);

    // Membuat efek bintang
    function createStars() {
        const space = document.createElement('div');
        space.className = 'space';
        document.body.appendChild(space);

        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Ukuran acak untuk bintang
            const size = Math.random() * 3;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Posisi acak
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Durasi animasi acak
            star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
            
            space.appendChild(star);
        }
    }

    // Panggil fungsi saat halaman dimuat
    window.addEventListener('load', createStars);

    // Efek cursor 3D
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Efek hover pada link
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderColor = '#ff0000';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = '#fff';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}); 