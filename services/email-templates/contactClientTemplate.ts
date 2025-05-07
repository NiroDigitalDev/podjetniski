export interface ContactClientEmailData {
  name?: string;
  email?: string;
}

export function generateContactClientEmail(
  data: ContactClientEmailData = {}
): string {
  return `
<!DOCTYPE html>
<html lang="sl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Povpraševanje uspešno prejeto</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');
        
        :root {
            color-scheme: light dark;
        }
        
        body {
            font-family: 'Work Sans', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #1a1a1a;
                color: #f9f9f9;
            }
            .content {
                background-color: #2c2c2c !important;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
            }
            .footer-links a {
                color: #f9f9f9 !important;
            }
            .button a {
                box-shadow: 0 4px 8px rgba(0,0,0,0.3) !important;
            }
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .header {
            background-color: #2e2e2e;
            padding: 24px 0;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        
        .logo {
            max-width: 180px;
            height: auto;
        }
        
        .content {
            background-color: white;
            padding: 35px 30px;
            margin: 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .success-icon {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .success-circle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            background-color: #7ed957;
            border-radius: 50%;
            margin: 0 auto;
            box-shadow: 0 4px 10px rgba(126,217,87,0.4);
        }
        
        .success-title {
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            margin: 20px 0 24px;
            color: #2e2e2e;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            text-align: center;
            margin-bottom: 25px;
            color: #444;
        }
        
        .message p {
            margin: 0 0 12px;
        }
        
        .button {
            text-align: center;
            margin: 25px 0 10px;
        }
        
        .button a {
            display: inline-block;
            background-color: #7ed957;
            color: #fff;
            text-decoration: none;
            padding: 14px 32px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 4px 8px rgba(126,217,87,0.3);
            letter-spacing: 0.3px;
        }
        
        .footer {
            background-color: #2e2e2e;
            padding: 25px 20px;
            text-align: center;
            color: #fff;
            border-radius: 0 0 8px 8px;
        }
        
        .footer-links {
            margin: 0 0 15px;
        }
        
        .footer-links a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
            font-size: 14px;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            color: #fff;
            text-decoration: none;
            width: 36px;
            height: 36px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 50%;
        }
        
        .contact {
            margin: 15px 0;
            font-size: 14px;
            color: rgba(255,255,255,0.9);
        }
        
        .contact a {
            color: rgba(255,255,255,0.9);
            text-decoration: none;
        }
        
        .copyright {
            font-size: 12px;
            margin-top: 10px;
            color: rgba(255,255,255,0.7);
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
            <img src="https://ukumnqjejmimditfhzbg.supabase.co/storage/v1/object/public/assets//logo.png" alt="TeleFinder Logo" class="logo">
        </div>
        
        <div class="content">
            <div class="success-icon">
                <div class="success-circle" style="display: table; text-align: center;">
                    <div style="display: table-cell; vertical-align: middle; width: 70px; height: 70px;">
                        <span style="color: #ffffff; font-size: 42px; font-weight: bold; line-height: 0;">✓</span>
                    </div>
                </div>
            </div>
            
            <div class="success-title">Povpraševanje uspešno prejeto!</div>
            
            <div class="message">
                <p>Povpraševanje za menjavo operaterja je bilo uspešno prejeto. Pričakujte klic v naslednjih 24 urah.</p>
                <p>Zahvaljujemo se vam za zaupanje. Naša ekipa bo pregledala vaše povpraševanje in našla najugodnejšo ponudbo za vaše potrebe.</p>
            </div>
            
            <div class="button">
                <a href="https://telefinder.si">Nazaj na spletno stran</a>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-links">
                <a href="#">Domov</a>
                <a href="#">Naša rešitev</a>
                <a href="#">Operaterji</a>
                <a href="#">Pogosta Vprašanja</a>
            </div>
            
            <div class="contact">
                <a href="mailto:info@telefinder.si">info@telefinder.si</a>
            </div>
            
            <div class="copyright">
                © ${new Date().getFullYear()} TeleFinder. Vse pravice pridržane.
            </div>
        </div>
    </div>
</body>
</html>
  `;
}
