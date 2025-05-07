export function generateContactClientEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="sl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sporočilo prejeto</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #F4F4F4;
            color: #000000;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .header {
            background-color: #FF0000;
            padding: 30px;
            text-align: center;
            border: 2px solid #000000;
            border-bottom: none;
        }
        
        .logo-text {
            font-size: 24px;
            font-weight: 900;
            text-transform: uppercase;
            color: #FFFFFF;
            letter-spacing: 1px;
        }
        
        .content {
            background-color: #FFFFFF;
            padding: 40px 30px;
            border-left: 2px solid #000000;
            border-right: 2px solid #000000;
            position: relative;
        }
        
        .content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 10px;
            background-color: #000000;
        }
        
        .message-box {
            background-color: #FFFFFF;
            border: 2px solid #000000;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 6px 6px 0 #000000;
        }
        
        .title {
            font-size: 28px;
            font-weight: 900;
            text-transform: uppercase;
            margin: 0 0 20px 0;
            letter-spacing: 0.5px;
            color: #000000;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 25px;
            color: #000000;
        }
        
        .button {
            display: inline-block;
            background-color: #FF0000;
            color: #FFFFFF;
            text-decoration: none;
            padding: 16px 30px;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 16px;
            border: 2px solid #000000;
            box-shadow: 4px 4px 0 #000000;
            letter-spacing: 0.5px;
            transition: all 0.2s ease;
        }
        
        .button:hover {
            background-color: #000000;
            color: #FFFFFF;
            box-shadow: none;
            transform: translate(4px, 4px);
        }
        
        .footer {
            background-color: #000000;
            padding: 30px;
            text-align: center;
            color: #FFFFFF;
            border: 2px solid #000000;
            border-top: none;
        }
        
        .footer-links {
            margin: 0 0 20px;
        }
        
        .footer-links a {
            color: #FFFFFF;
            text-decoration: none;
            margin: 0 10px;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 14px;
        }
        
        .contact {
            margin: 20px 0;
            font-size: 14px;
            font-weight: 500;
        }
        
        .contact a {
            color: #FFFFFF;
            text-decoration: none;
        }
        
        .social-row {
            margin: 20px 0;
        }
        
        .social-link {
            display: inline-block;
            margin: 0 5px;
            width: 40px;
            height: 40px;
            background-color: #FF0000;
            border: 2px solid #FFFFFF;
            color: #FFFFFF;
            text-align: center;
            font-size: 20px;
            line-height: 40px;
            text-decoration: none;
        }
        
        .copyright {
            font-size: 12px;
            margin-top: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        @media screen and (max-width: 480px) {
            .content {
                padding: 25px 15px;
            }
            
            .footer-links a {
                display: block;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo-text">Podjetniški Klub FMF</div>
        </div>
        
        <div class="content">
            <div class="message-box">
                <div class="title">Sporočilo prejeto!</div>
                
                <div class="message">
                    <p>Zdravo ${name},</p>
                    <p>Prejeli smo vaše sporočilo in se vam zahvaljujemo za zanimanje za Podjetniški klub FMF.</p>
                    <p>Odgovorili vam bomo v najkrajšem možnem času. Za kakršnakoli dodatna vprašanja smo vam na voljo.</p>
                </div>
            </div>
            
            <center>
                <a href="https://podjetniski-klub.fmf.si" class="button">Nazaj na spletno stran</a>
            </center>
        </div>
        
        <div class="footer">
            <div class="footer-links">
                <a href="https://podjetniski-klub.fmf.si">DOMOV</a>
                <a href="https://podjetniski-klub.fmf.si/blog">BLOG</a>
                <a href="https://podjetniski-klub.fmf.si/events">DOGODKI</a>
            </div>
            
            <div class="social-row">
                <a href="#" class="social-link">f</a>
                <a href="#" class="social-link">in</a>
                <a href="#" class="social-link">ig</a>
            </div>
            
            <div class="contact">
                <a href="mailto:podjetniski.klub@fmf.uni-lj.si">podjetniski.klub@fmf.uni-lj.si</a>
            </div>
            
            <div class="copyright">
                © ${new Date().getFullYear()} Podjetniški Klub FMF. Vse pravice pridržane.
            </div>
        </div>
    </div>
</body>
</html>
  `;
}
