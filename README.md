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
