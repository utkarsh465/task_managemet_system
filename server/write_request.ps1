$content = @'
$kind: http-request
name: Register User
url: 'http://localhost:5000/api/auth/register'
method: POST
headers:
  - key: Content-Type
    value: application/json
body:
  mode: raw
  raw: |-
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
  options:
    raw:
      language: json
order: 1783927307738
'@

# Convert LF to CRLF
$crlf = $content -replace "`n", "`r`n"
[System.IO.File]::WriteAllText('D:/task_management_system/server/postman/collections/New Collection/New Request.request.yaml', $crlf, [System.Text.Encoding]::UTF8)
Write-Host 'Done'
