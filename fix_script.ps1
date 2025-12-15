$path = "c:\khatabook-landing\khatabook-landing\app\about\page.tsx"
$lines = Get-Content $path
Write-Output "Current line count: $($lines.Count)"
if ($lines.Count -gt 800) {
    $clean = $lines[0..799]
    $clean | Set-Content $path -Encoding UTF8
    Write-Output "Truncating to 800 lines..."
} else {
    Write-Output "File count is ok or check manually."
}
# verify end
$newLines = Get-Content $path -Tail 5
Write-Output "New tail:"
$newLines
