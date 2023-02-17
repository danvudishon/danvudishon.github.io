

function App()
{
    $(document).ready(function(){
        $('#app').click(function(){
           $('#logo').text('Appearance');
           $('#underLogo').text('How I think I appear to other people.');
           $('#paperText').text("I probably appear quiter and more focused on my own things to other people. I tend to become absorbed in my own thoughts when I'm not actively participating in a conversation, which can sometimes make it difficult for me to quickly respond if someone asks me a question. However, I am working on being more present in conversations and striving to actively engage with others.");
           $('#endText').text("I believe it's important to develop strong connections with others. In a world where many people feel isolated and disconnected, forming meaningful relationships can be a valuable source of support and inspiration. By being more talkative and outgoing, I hope to be able to engage in more interesting conversations, learn from others, and share my own ideas and experiences.")
        });
        $('#pt').click(function(){
            $('#logo').text('Personality Type');
            $('#underLogo').text('My PathwayU Personality Results.');
            $('#paperText').text("My top personality trait is openness to experience. I have a deep passion for exploring new ideas, perspectives, and opportunities to learn, so it's no suprise that is my top trait. I'm always eager to expand my knowledge and understanding of the world around me.");
            $('#endText').text("Overall, I believe that my openness to experience is a defining trait that has shaped many aspects of my life. Whether it's in my personal pursuits or my professional aspirations.");
        });
        $('#val').click(function(){
            $('#logo').text('Values');
            $('#underLogo').text("Things I value.");
            $('#paperText').text("My top two values are achievent and independece. These values have guided many of my choices and actions throughout my life and have played a significant role in shaping who I am as a person.");
            $('#endText').text("I also recognize that these values can sometimes be at odds with one another. While achievement often requires teamwork and collaboration, independence can sometimes be seen as a more individualistic pursuit. Therefore, I strive to strike a balance between these two values, seeking out opportunities to work with others while still maintaining a sense of self-direction.");
        });
        $('#prj').click(function(){
            $('#logo').text('Project');
            $('#underLogo').text('Summary of a successful project I completed.');
            $('#paperText').text("I've been devoted a significant amount of time and effort towards creating my own personal website. My goal was to create a platform where I can showcase my abilities and potentially find work opportunities online.");
            $('#endText').text("By creating a personal website, I hope to demonstrate my skills and expertise in a more professional manner. This website will allow me to provide detailed information about my background, education, experience, and skill set. This, in turn, will make it easier for potential clients or employers to evaluate my qualifications and determine if I'm a good fit for their needs.");
        });
        $('#sw').click(function(){
            $('#logo').text('Strengths / Weaknesses');
            $('#underLogo').text('My strengths and weaknesses');
            $('#paperText').text("From an early age, I was fascinated by how technology worked and how it could be used to improve people's lives. I think that my greatest strength is my passion for technology and my drive to keep learning and improving. Also I take pride in my ability to be understanding and empathetic towards others. I believe that being compassionate and sympathetic is a fundamental part of being a good person. Finally, I am commited to leading a healthy and athletic lifestyle. To me, staying physically active and taking care of my body is an essential part of living a happy, fulfilling life.");   
            $('#endText').text("My weakness is my tendency to overthink things. I sometimes find myself getting bogged down in indecision or becoming overwhelmed by the complexity of a problem.");
        });
        $('#com').click(function(){
            $('#logo').text('Communication Style');
            $('#underLogo').text('My communication style.');
            $('#paperText').text("To me, the ability to connect with others is essential for personal and professional success. Whether I am chatting with a friend or working with a student on a project, I believe that clear and effective communication is key to achieving our goals.");
            $('#endText').text("");
        });
        $('#exp').click(function(){
            $('#logo').text('Community Experience');
            $('#underLogo').text('A summary of a past community experience.');
            $('#paperText').text("The only time, I participated in a community service project was a long time ago. The goal was to revitalize a local park. We spent several days working together to clean up the park, repaint benches, and plant new flowers and trees.");
            $('#endText').text("Looking back, I realize that this community service was so much more than just a way to improve a park. It was an opportunity to connect with others and make a positive impact in our community. It showed me the power of coming together with people who have different backgrounds and experiences, and how much we can accomplish when we work towards a common goal.");
        });
        $('#ment').click(function(){
            $('#logo').text('Mentor');
            $('#underLogo').text('A mentor I look up to and the reasons.');
            $('#paperText').text("I believe in the power of self-reflection and self-guided learning, so I consider myself to be my own mentor. By taking ownership of my personal growth and development, I am able to set my own goals, evaluate my progress, and make adjustments along the way. ");
            $('#endText').text("Although I've had the support of my parents throughout my life, I haven't had a dedicated mentor to guide me in my personal and professional growth.");
        });
        $('#purp').click(function(){
            $('#logo').text('Purpose Statement');
            $('#underLogo').text('My purpose statement.');
            $('#paperText').text("I believe that continuous learning and improvement are essential to living a fulfilling life. Therefore, my purpose is to always seek out new knowledge, skills, and experiences that will help me grow as an individual. ");
            $('#endText').text("By embracing a growth mindset and remaining open to new opportunities, I am able to challenge myself and reach my full potential. My commitment to lifelong learning is a key part of who I am, and it drives me to strive for excellence in everything I do.");
        });
        $('#mis').click(function(){
            $('#logo').text('Mission');
            $('#underLogo').text('My mission statement.');
            $('#paperText').text("My mission is to live a fulfilling life. This means that I am committed to pursuing my passions and making a positive impact on the world around me.");
            $('#endText').text(" believe that by staying true to my values, staying curious and open-minded, and embracing the challenges that come my way, I can create a life that is both rewarding and meaningful. ");
        });
    });
}

App();

