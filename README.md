﻿# Bio_et_Bien_-tre
# Bio_et_Bien_-tre
WiFiSlax is a lightweight Linux distribution designed for wireless penetration testing and network analysis. It comes with a variety of pre-installed tools for Wi-Fi hacking, but it doesn't include Google Chrome by default. However, you can install Google Chrome or use the Google search engine in any browser. Below are the steps to install Google Chrome on WiFiSlax:

### Method 1: Install Google Chrome
1. **Open a Terminal**:
   - In WiFiSlax, open a terminal window. You can usually find it in the menu or by pressing `Ctrl + Alt + T`.

2. **Download Google Chrome**:
   - Use the `wget` command to download the Google Chrome `.deb` package:
     ```bash
     wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
     ```

3. **Install Dependencies**:
   - Google Chrome requires some dependencies that might not be installed by default. Install them using:
     ```bash
     sudo apt-get update
     sudo apt-get install -f
     ```

4. **Install Google Chrome**:
   - Use `dpkg` to install the downloaded `.deb` package:
     ```bash
     sudo dpkg -i google-chrome-stable_current_amd64.deb
     ```
   - If there are any missing dependencies, fix them by running:
     ```bash
     sudo apt-get install -f
     ```

5. **Launch Google Chrome**:
   - Once installed, you can launch Google Chrome from the application menu or by typing `google-chrome` in the terminal.

### Method 2: Use Google Search in an Existing Browser
If you don't want to install Google Chrome, you can use the Google search engine in any browser that comes pre-installed with WiFiSlax, such as Firefox.

1. **Open the Browser**:
   - Launch Firefox or any other browser from the application menu.

2. **Navigate to Google**:
   - In the address bar, type `www.google.com` and press `Enter`.

### Method 3: Install Google Chrome via Script (Alternative)
WiFiSlax sometimes includes scripts to simplify the installation of additional software. You can check if there's a script for installing Google Chrome:

1. **Open the Scripts Menu**:
   - Navigate to the scripts or tools menu in WiFiSlax.

2. **Run the Chrome Installation Script**:
   - If available, run the script to install Google Chrome automatically.

### Notes:
- WiFiSlax is based on Slax, which is a lightweight and modular Linux distribution. Some packages or dependencies might not be available by default, so you may need to enable additional repositories or modules.
- If you encounter issues, consider using a different browser like Firefox, which is often pre-installed and works well for most tasks.

By following these steps, you should be able to install and use Google Chrome on WiFiSlax.
