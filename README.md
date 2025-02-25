# Bio_et_Bien_-tre
# Bio_et_Bien_-tre




To install Google Chrome on WiFiSlax, follow these steps:

1. **Download Google Chrome**: Visit the [official Google Chrome download page](https://www.google.com/chrome/) and download the `.deb` package for Linux.
2. **Open Terminal**: Launch the terminal in WiFiSlax.
3. **Install Dependencies**: Ensure you have the necessary dependencies installed. Run the following command:
   ```bash
   sudo apt-get install libappindicator1 libindicator7
   ```
4. **Install Google Chrome**: Navigate to the directory where you downloaded the `.deb` package and run:
   ```bash
   sudo dpkg -i google-chrome-stable_current_amd64.deb
   ```
5. **Fix Dependencies**: If there are any dependency issues, run:
   ```bash
   sudo apt-get -f install
   ```

After completing these steps, you should have Google Chrome installed on your WiFiSlax system. If you encounter any issues, feel free to ask for further assistance!
___________________________________________________________
_______________________
_________
To install Google Chrome from a downloaded `.tar.gz` file on WiFiSlax (a Slackware-based distribution), follow these steps:

---

### **Step 1: Extract the `.tar.gz` File**
1. Open a terminal and navigate to the directory where the `.tar.gz` file is located (e.g., `Downloads`):
   ```bash
   cd ~/Downloads
   ```

2. Extract the archive:
   ```bash
   tar -xvf google-chrome-stable_current_*.tar.gz
   ```
   This will create a folder named `google-chrome`.

---

### **Step 2: Install Dependencies**
Google Chrome requires several libraries to run. Since WiFiSlax is lightweight, some dependencies may be missing. Here’s how to check and install them:

#### **Common Dependencies**:
- `libnss3`
- `libxss1`
- `libgdk-pixbuf2.0-0`
- `libgtk-3-0`
- `libatomic`
- `libappindicator3-1`

#### **Install Missing Dependencies**:
WiFiSlax uses Slackware-style packages (`.txz`). You can search for these packages on the [Slackware Package Browser](https://slackware.pkgs.org/) and download them manually. For example:
1. Download a dependency (e.g., `libnss3`):
   ```bash
   wget [URL_of_libnss3.txz]
   ```

2. Install it using:
   ```bash
   installpkg [package_name.txz]
   ```

---

### **Step 3: Run Google Chrome**
1. Navigate to the extracted `google-chrome` folder:
   ```bash
   cd google-chrome
   ```

2. Launch Chrome directly:
   ```bash
   ./chrome
   ```

---

### **Step 4: Create a Desktop Shortcut (Optional)**
To make Chrome easily accessible:
1. Create a `.desktop` file in `~/.local/share/applications/`:
   ```bash
   nano ~/.local/share/applications/google-chrome.desktop
   ```

2. Add the following content (adjust paths as needed):
   ```ini
   [Desktop Entry]
   Version=1.0
   Name=Google Chrome
   Exec=/path/to/google-chrome/chrome
   Icon=/path/to/google-chrome/product_logo_48.png
   Terminal=false
   Type=Application
   Categories=Network;WebBrowser;
   ```

3. Save the file and make it executable:
   ```bash
   chmod +x ~/.local/share/applications/google-chrome.desktop
   ```

---

### **Troubleshooting**
1. **Missing Libraries**:
   - If Chrome crashes or complains about missing libraries, note the error message and install the required Slackware package (`.txz`) manually.

2. **Portable Mode**:
   - To avoid dependency issues, run Chrome as a portable app:
     ```bash
     ./chrome --no-sandbox --user-data-dir=/tmp/chrome-profile
     ```
   > **Note**: This is less secure and only recommended for temporary use.

3. **Use Chromium Instead**:
   - Install Chromium (open-source Chrome alternative) if dependencies are too complex:
     ```bash
     wget [Chromium_Slackware_Package_URL]
     installpkg chromium-*.txz
     ```

---

### **Final Notes**
- WiFiSlax is designed for portability and security testing, not general-purpose software installation. For a smoother experience, consider using a Debian/Ubuntu-based distribution (e.g., Kali Linux) if you need Chrome for regular use.
- If you only need Google Search, use the pre-installed Firefox or Midori browser.

Let me know if you need help finding specific Slackware packages! 😊
