export function generateContactAdminEmail(
  name: string,
  email: string,
  message: string
): string {
  return `
<!DOCTYPE html>
<html lang="sl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova prijava - Podjetniški Klub FMF</title>
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
            background-color: #000000;
            padding: 30px;
            text-align: center;
            border: 2px solid #FF0000;
            border-bottom: none;
        }
        
        .logo-text {
            font-size: 24px;
            font-weight: 900;
            text-transform: uppercase;
            color: #FFFFFF;
            letter-spacing: 1px;
        }
        
        .alert-badge {
            display: inline-block;
            background-color: #FF0000;
            color: #FFFFFF;
            font-weight: 700;
            text-transform: uppercase;
            padding: 5px 10px;
            margin-top: 10px;
            border: 2px solid #FFFFFF;
        }
        
        .content {
            background-color: #000000;
            padding: 40px 30px;
            border-left: 2px solid #FF0000;
            border-right: 2px solid #FF0000;
        }
        
        .title {
            font-size: 28px;
            font-weight: 900;
            text-transform: uppercase;
            margin: 0 0 30px 0;
            letter-spacing: 0.5px;
            color: #FFFFFF;
            border-bottom: 4px solid #FF0000;
            padding-bottom: 10px;
            display: inline-block;
        }
        
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        
        .info-table th {
            text-align: left;
            padding: 10px;
            background-color: #000000;
            color: #FFFFFF;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 14px;
            border: 2px solid #FFFFFF;
        }
        
        .info-table td {
            padding: 10px;
            border: 2px solid #FFFFFF;
            font-size: 16px;
        }
        
        .message-box {
            background-color: #000000;
            border: 2px solid #FFFFFF;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 6px 6px 0 #FF0000;
        }
        
        .message-label {
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
            font-size: 16px;
            color: #FFFFFF;
        }
        
        .message-content {
            font-size: 16px;
            line-height: 1.6;
            color: #FFFFFF;
            white-space: pre-wrap;
        }
        
        .button {
            display: inline-block;
            background-color: #000000;
            color: #FFFFFF;
            text-decoration: none;
            padding: 16px 30px;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 16px;
            border: 2px solid #FF0000;
            box-shadow: 4px 4px 0 #FF0000;
            letter-spacing: 0.5px;
            transition: all 0.2s ease;
        }
        
        .button:hover {
            background-color: #FF0000;
            border-color: #FFFFFF;
            box-shadow: 4px 4px 0 #FFFFFF;
        }
        
        .footer {
            background-color: #000000;
            padding: 30px;
            text-align: center;
            color: #FFFFFF;
            border: 2px solid #FF0000;
            border-top: none;
        }
        
        .timestamp {
            font-size: 14px;
            margin-bottom: 20px;
            font-weight: 500;
        }
        
        .copyright {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        @media screen and (max-width: 480px) {
            .content {
                padding: 25px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo-text">Podjetniški Klub FMF</div>
            <div class="alert-badge">Nova prijava</div>
        </div>
        
        <div class="content">
            <div class="title">Obrazec za prijavo</div>
            
            <table class="info-table">
                <tr>
                    <th>Datum</th>
                    <td>${new Date().toLocaleString("sl-SI", {
                      dateStyle: "full",
                      timeStyle: "short",
                    })}</td>
                </tr>
                <tr>
                    <th>Ime</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><a href="mailto:${email}" style="color: #FF0000; font-weight: 700;">${email}</a></td>
                </tr>
            </table>
            
            <div class="message-box">
                <div class="message-label">Sporočilo/Opomba:</div>
                <div class="message-content">${message || "Brez dodatnega sporočila."}</div>
            </div>
            
            <center>
                <a href="mailto:${email}" class="button">Odgovori</a>
            </center>
        </div>
        
        <div class="footer">
            <div class="timestamp">
                Ta email je bil avtomatsko generiran ob ${new Date().toLocaleTimeString(
                  "sl-SI"
                )} dne ${new Date().toLocaleDateString("sl-SI")}
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
