const mockNAVData =
            `<!DOCTYPE html><html><head><title>Code Quiz</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Code Quiz</h1><script>function logout() {
                document.cookie = 'hasCookie=';
                location.reload();
              }</script><p>Funds NAV</p><table><tr><th>Fund Name</th><th>Nav </th><th>Bid</th><th>Offer</th><th>Change</th></tr><tr><td>FUNDNAME1</td><td>-123.999</td><td>10.0549</td><td>10.0548</td><td>10.123</td></tr><tr> <td> FUNDNAME2 </td><td>9.001</td><td>9.9775</td><td>9.9774</td><td>0.0927</td></tr><tr> <td> FUNDNAME3</td><td>5.4321</td><td>11.2471</td><td>11.247</td><td>0.1319</td></tr><tr> <td>FUNDNAME4</td><td>4.567898765</td><td>11.4431</td><td>11.443</td><td>0.1488</td></tr></table><input type="button" value="Logout" onclick="logout()"></body></html>`



module.exports = mockNAVData