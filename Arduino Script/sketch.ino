#include <LiquidCrystal.h>


const int rs = 52, rw = 51, en = 50, c0 = 37, c1 = 36, c2 = 35, c3 = 34, c4 = 33, c5 = 32, c6 = 31, c7 = 30;
LiquidCrystal lcd(rs, rw, en, c0, c1, c2, c3, c4, c5, c6, c7);


void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);
}


void loop() {
  String inBytes = Serial.readStringUntil('\n');
  DetectButtons(inBytes);
  displayResult(inBytes);

}


void DetectButtons(String inBytes) {
  if (inBytes == "clear") {
    lcd.clear();
  }
}


void displayResult(String inBytes) { 
    lcd.setCursor(0, 0);
    if (inBytes != "clear") {
      lcd.print(inBytes);   
    }   
}
