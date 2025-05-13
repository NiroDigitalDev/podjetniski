export function generateContactClientEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="sl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Potrditev prijave</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #000000;
            color: #FFFFFF;
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
            border: 2px solid #FFFFFF;
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
            background-color: #000000;
            padding: 40px 30px;
            border-left: 2px solid #FFFFFF;
            border-right: 2px solid #FFFFFF;
            position: relative;
        }
        
        .content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 10px;
            background-color: #FFFFFF;
        }
        
        .message-box {
            background-color: #000000;
            border: 2px solid #FFFFFF;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 6px 6px 0 #FFFFFF;
        }
        
        .title {
            font-size: 28px;
            font-weight: 900;
            text-transform: uppercase;
            margin: 0 0 20px 0;
            letter-spacing: 0.5px;
            color: #FFFFFF;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 25px;
            color: #FFFFFF;
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
            border: 2px solid #FFFFFF;
            box-shadow: 4px 4px 0 #FFFFFF;
            letter-spacing: 0.5px;
            transition: all 0.2s ease;
        }
        
        .button:hover {
            background-color: #FFFFFF;
            color: #000000;
            box-shadow: none;
            transform: translate(4px, 4px);
        }
        
        .footer {
            background-color: #000000;
            padding: 30px;
            text-align: center;
            color: #FFFFFF;
            border: 2px solid #FFFFFF;
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
                <div class="title">Prijava uspešno prejeta!</div>
                
                <div class="message">
                    <p>Zdravo ${name},</p>
                    <p>Hvala za prijavo na Podjetniški klub FMF.</p>
                    <p>Dodali vas bomo na našo mailing listo in vas obveščali o prihajajočih dogodkih, zanimivih predavanjih, podjetniških priložnostih in ostalih aktivnostih našega kluba.</p>
                    <p>Za kakršnakoli vprašanja smo vam na voljo.</p>
                </div>
            </div>
            
            <center>
                <a href="https://podjetniski.vercel.app" class="button">Nazaj na spletno stran</a>
            </center>
        </div>
        
        <div class="footer">
            <div class="footer-links">
                <a href="https://podjetniski.vercel.app">DOMOV</a>
                <a href="https://podjetniski.vercel.app/blog">BLOG</a>
                <a href="https://podjetniski.vercel.app/dogodki">DOGODKI</a>
            </div>
            
            <div class="social-row">
                <a href="https://instagram.com/podjetniski.klub.fmf" class="social-link">ig</a>
            </div>
            
            <div class="contact">
                <a href="mailto:nd7855@student.uni-lj.si">nd7855@student.uni-lj.si</a>
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
