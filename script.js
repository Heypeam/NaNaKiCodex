// script.js - อนิเมชั่นเวลาเลื่อน, mobile menu, scroll reveal + smooth
document.addEventListener('DOMContentLoaded', function() {
    // เมนู mobile toggle
    const mobileBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ปิดเมนูเมื่อคลิกลิงก์ใน mobile
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // เลื่อนแบบ smooth (default scroll-behavior แล้ว แต่จับ event)
    // สำหรับ reveal animation เมื่อเลื่อนถึง section
    const sections = document.querySelectorAll('.services, .team, .motto');
    
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const revealThreshold = 120;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop < windowHeight - revealThreshold) {
                section.classList.add('visible');
            } else {
                // ถ้าอยากให้เกิดแค่ครั้งเดียว ไม่ต้องลบ class แต่ไม่เป็นไร
                // แต่เพื่อประสบการณ์ถ้าเลื่อนกลับขึ้นไม่ควรหาย เราเพิ่ม class แล้วไม่ลบ
                if(!section.classList.contains('visible')) {
                    // optional: ไม่ทำอะไร
                }
            }
        });
    }
    
    // เรียกครั้งแรก
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    
    // Navbar animation ลดความโปร่งแสงเวลาเลื่อน (เพิ่มขอบเขต)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = '0 4px 18px rgba(0,0,0,0.03)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.96)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // เพิ่มอนิเมชั่นการเลื่อนที่นุ่มนวลสำหรับ internal links (เสริมความแน่น)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === "#" || targetId === "") return;
            const targetElem = document.querySelector(targetId);
            if(targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // อัปเดต url แต่ไม่ต้องการกระโดดพรวด
                history.pushState(null, null, targetId);
            }
        });
    });
});