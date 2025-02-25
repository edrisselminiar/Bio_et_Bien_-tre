# Bio_et_Bien_-tre
# Bio_et_Bien_-tre

To install the Yandex Browser from the GitHub repository [`drcoccodrillus/snap-yandex-browser`](https://github.com/drcoccodrillus/snap-yandex-browser.git) on **Wifislax** (a Slackware-based distro), follow these steps:

---

### **1. Install Prerequisites**
Wifislax is Slackware-based, so ensure you have:
- `git` (to clone the repository)
- Snap package support (if needed)
- Dependencies like `glibc`, `libstdc++`, and other browser-related libraries.

#### Install Git:
```bash
# On Wifislax, use the native package tool (if available):
sbopkg -i git
# Or download Slackware packages manually and install via installpkg.
```

---

### **2. Clone the Repository**
```bash
git clone https://github.com/drcoccodrillus/snap-yandex-browser.git
cd snap-yandex-browser
```

---

### **3. Install Yandex Browser**
This repository provides a **Snap package** for Yandex Browser. However, **Wifislax does not natively support Snap**, so you have two options:

---

#### **Option 1: Use Snap (Not Recommended for Slackware)**
Snap is not officially supported on Slackware/Wifislax, but you can try manual installation:
1. Install Snapd from source (complicated and error-prone).
2. Use the repository’s pre-built Snap:
   ```bash
   # If Snap is installed:
   sudo snap install --dangerous yandex-browser_*.snap
   ```
   This method is **not guaranteed to work** on Wifislax due to dependency issues.

---

#### **Option 2: Direct Download from Yandex (Recommended)**
Skip Snap entirely and install Yandex Browser directly:
1. Download the **official Linux tarball** from [Yandex Browser](https://browser.yandex.com/desktop/).
   ```bash
   wget https://browser.yandex.com/download/?os=linux
   ```
2. Extract the tarball:
   ```bash
   tar -xzvf yandex-browser*.tar.gz
   ```
3. Run the browser:
   ```bash
   cd yandex-browser*
   ./yandex-browser
   ```
   (Replace paths with the actual downloaded filename.)

---

#### **Option 3: Manual Installation from GitHub Repo**
The repository may include browser binaries. Check for a `bin/` or `release/` directory:
```bash
cd snap-yandex-browser
ls -l
# Look for pre-built binaries or instructions in the README.
# If found, run:
./yandex-browser
```

---

### **4. Resolve Dependencies**
If you encounter missing libraries (e.g., `libgconf`, `libnss`), install them manually:
```bash
# Search for Slackware packages here: https://slackbuilds.org/
# Example: Install libnss
sbopkg -i libnss
```

---

### **5. Create a Launcher (Optional)**
To add Yandex Browser to your applications menu:
1. Create a desktop file:
   ```bash
   sudo nano /usr/share/applications/yandex-browser.desktop
   ```
2. Add:
   ```ini
   [Desktop Entry]
   Name=Yandex Browser
   Exec=/path/to/yandex-browser
   Icon=/path/to/icon.png
   Type=Application
   Categories=Network;WebBrowser;
   ```

---

### **Key Notes**
- **Snap Compatibility**: Slackware/Wifislax lacks native Snap support. Use the direct tarball method instead.
- **Dependencies**: Install missing libraries from SlackBuilds.org or compile them manually.
- **Security**: Yandex Browser is proprietary software. Review its policies before use.

Let me know if you need further help! 🦊
