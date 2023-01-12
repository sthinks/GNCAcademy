<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
  border:2px solid rgba(1, 1, 1, 0.03);
    border-collapse: collapse;
}
body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

</style>
</head>
<body>

<h4 style="text-align: center;" >GNC AKADEMİ KAYDINIZ BAŞARIYLA GERÇEKLEŞMİŞTİR.</h4>


<table style="width:100%">
  <tr >
    <th colspan="2" >Kayıt Bilgileriniz</th>
  </tr>
  <tr  >
    <td >Ad</td>
    <td >{{$details['name']}}</td>
  </tr>
  <tr>
    <td>Soyad</td>
    <td>{{$details['lastname']}}</td>
  </tr>
  <tr>
    <td>Adres</td>
    <td>{{$details['address']}}</td>
  </tr>
  <tr>
    <td>Numaranız</td>
    <td>{{$details['phone_number']}}</td>
  </tr>
  <tr>
    <td>E-mail</td>
    <td>{{$details['email']}}</td>
  </tr>
  <tr>
    <td>Mezun Olduğu Okul</td>
    <td>{{$details['school']}}</td>
  </tr>
  <tr>
    <td>Mezun Olduğu Bölüm</td>
    <td>{{$details['school_major']}}</td>
  </tr>
  <tr>
    <td>Çalıştığı firma</td>
    <td>{{$details['company']}}</td>
  </tr>
  <tr>
    <td>Departman</td>
    <td>{{$details['department']}}</td>
  </tr>
  <tr>
    <td>Yaptığı İş</td>
    <td>{{$details['job']}}</td>
  </tr>
  <tr>
    <td>Unvan</td>
    <td>{{$details['job_title']}}</td>
  </tr>
  <tr>
    <td>Öğrenmek İstediği CNC Makinesi</td>
    <td>{{$details['wantcnc']}}</td>
  </tr>
  <tr>
    <td>Mevcutta CNC Makinesi Var Mı?</td>
    <td>{{$details['havecnc']}}</td>
  </tr>
  <tr>
    <td>Açıklama</td>
    <td>{{$details['havecnc_description']}}</td>
  </tr>
  <tr>
    <td>Hiç CNC Makinesi Kullandı Mı</td>
    <td>{{$details['usecnc']}}</td>
  </tr>
  <tr>
    <td>Talaşlı İmalat Bilgisi Var Mı?</td>
    <td>{{$details['isknow_sawdust_machining_information']}}</td>
  </tr>
  <tr>
    <td>Açıklama</td>
    <td>{{$details['isknow_sawdust_machining_information_description']}}</td>
  </tr>
  <tr>
    <td>Malzeme Bilgisi</td>
    <td>{{$details['material_information']}}</td>
  </tr>
  <tr>
    <td>Ölçme Aleti Bilgisi</td>
    <td>{{$details['gauge_information']}}</td>
  </tr>
  <tr>
    <td>Bakım Bilgisi</td>
    <td>{{$details['maintenance_information']}}</td>
  </tr>
  <tr>
    <td>Almış Olduğu Eğitimler</td>
    <td>{{$details['take_educations']}}</td>
  </tr>
</table>

<p style="text-align: center; font-weight: bold;">Gnc AKADEMİ</p>
</body>
</html>

