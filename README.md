# Single Error Correcting - Hamming Code

JS ile yazılmış Single Error Correcting - Hamming Code gerçekleştiren bir simülasyondur.


### Link
Simülasyonu denemek için: https://aleksdulda.github.io

### Simülasyon nasıl çalışır?

1) DATA IN

Bu kısım kullanıcıdan veri girişi talep eder. 

  - Bit sayısı seçilince LSB ve MSB tarafı belirlenir.
  - Seçilen bit sayısına göre kullanıcıdan binary olarak yönerge doğrultusunda bit girişi yapılır. 
  - "SEND TO MEMORY" tuşunabasılınca girilen veri kaydedilir.
  - Girilen verinin "1" setlenen konumlarının binary olarak exorlanır ve control bitleri oluşturulur
  - Kontrol bitleri 2'in katı olan konumlara yerleştirilir.
  - Memory kısmında kod ortaya çıkar.

2) MEMORY

  Bu kısımda bellekte olan verilerde herhangi bit üzerinde (yapay olarak) hata oluşturmaya izin verilir
   -Turuncu kutular kontrol bitleri olmak üzere oluşan kod üzerinde bir bitlik hata yapılabilir.
   -Değişiklik yaptııktan/yapmadıktan sonra diğer bölüme geçilir

3) COMPARE

   Bu kısımda bellekteği değiş(me)miş olan veriyi asıl olması gereken değerle aynı olup olmadığı görsel olarak gösterilir. Yapılan değişiklikler geçersizdir.
   
   - "READ FROM MEMORY" tuşuna basılarak memorydeki değiş(me)miş veriyi çeker ve ekranda gösterir.
   -  Asıl olması gereken gerçek değer değiş(me)miş değerin altında gösterilir
   -  "CHECK" Tuşuna basılaraktan değiş(me)miş verinin "1" setlenen konumlarının binary olarak exorlanır ve sendrom kelimesi oluşur
   -  Sendrom kelimesine göre eğer:
      * Sendrom kelimesinin hepsi 0'lardan oluşuyorsa hiç bir bit değiştrirlmemiş demektir
      * Sendrom kelimesinde sadece bir adet "1" varsa Control bitlerinden biri değiştirilmiştir anlamına gelir. Bu yüzden herhangi bir değişiklik yapılmaz.
      * Sendrom kelimesi iki adet "1" varsa Data bitlerinden birisi değiştirilmiştir anlamına gelir. Bu yüzden o sendrom kelimesinin denk geldiği bit Invert edilir.


5) CORRECTOR
   
  Bu kısımda bir önceki compare aşamasında yapılan işlemler sergilenmek üzere yazdırılır.
   - Değiştirilmemiş data bitleri yeşil
   - Kontrol bitleri değiştirilmiş ise mavi değiştirilmemiş ise yeşik
   - Hatalı data bitleri düzeltilmiş biçimde kırmızı
  olarak ekrana basılır.



