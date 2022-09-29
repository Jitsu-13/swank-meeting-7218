function navbar() {
  return `   <div id="containers">
    <div id="section1">
       <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUAAAD///9QUFBtbW2Ghobc3NxCQkKSkpLj4+NeXl55eXn5+fk3NzfJycnw8PCtra08PDxvb28VFRW0tLSlpaXp6elGRkYuLi7V1dUkJCQJCQlmZmaIiIjCwsIfHx/xuc+8AAAB/ElEQVR4nO3dWW7CQBBF0S5GgzHzDGH/y0yTCCX/6NWTzD07uLJBuCiaUgAAAAAAAAAAAAAAAAAAAPzWg2zrzLxpEw7NNKlvZsn7NcsInBsDI+b6QOcVfNJfxdZc2KoDp+bACPXbjedd9L9GXOjuq7SBE3deNZEWDtx51YBCCim0o5BCCv0ofM/anVeJBzbuvFB/8i5jd1+MxYUjd2CMxIVlaQ5cqgPtT4jap8MfQ2vgUB9YyuJg6zssMgKrYeeYKbZdygUEAAAAAAC9stgMs22yZjTVdudZ/Wp325xA59hbPvB+2hsDI/b6QO96acaCqTlQ/uWa+R59Ut+nvon+y0Fc6O4L9W16dOdVR2lh/3cxKMxAIYUU+lFI4acXntx51Ula2P9P3uXs7ouzuHDjDoyNuND+A0T1zw9LuZgLL/LCsrAGpgy+r52tr7tmBFaTVZM/12+bVcJ+MAAAAAAA6JnbfZTtfsvLm7hGUV3SoMa5+JWwmljKlzEw4ksf6D44UX5K68McGKHehF65A2MlLnQfX6o/+sPdF2xfvqv/uxgUZqCQQgr9KKTw0wvdG1FP4q0od17Ity99+1AvnbjQ/0LUvgyLf4VWvUBb3E/58r8oqR7OE0yXj4RC5zRKPYX6M+3G+bqsP7QCAAAAAAAAAAAAAAAAAAAAAADot28rYDdr/QNwOwAAAABJRU5ErkJggg==" alt=""></a>
       <a href=""><p>e-Paper |Sunday Chronicle</p></a>
      
    </div>
    <div id="section2">
        <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldqSI2uS5FDQLRP4u54x_Uam_90NKmB5M2A&usqp=CAU" alt=""></a>
        <a href=""><img src="data:image/png;base64,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" alt=""></a>
        <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gZjVSq5-da3Q8GKu63xygqQ6E6Dp2hqldg&usqp=CAU" alt=""></a>
        <a href=""><img src="https://www.deccanchronicle.com/images/app_store_iconWhite.png" alt=""></a>

    </div>
    <div id="section3">
        <a href=""><img src="data:image/jpeg;base64,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" alt=""></a> 
        <a href=""><p>Auto Refresh |Corporate Insolvency Resolution Process</p></a>
        <!-- <a href=""><p>|Corporate Insolvency Resolution Process</p></a>  -->
    </div>
 </div>

 <div id="title">
    <a href=""><img src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg" alt=""></a>
    <p>Saturday, Oct 1, 2022 | Last Update : 07:16 PM IST</p>
</div>
<div class="flex">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAAZlBMVEX39/cAAAD6+vr///9TU1P8/PzKysq+vr7s7Ow4ODjv7+/q6urx8fEZGRkeHh4jIyMTExNfX1/f39/j4+MMDAxZWVkoKChjY2MuLi4nJyczMzMaGhpRUVHS0tLa2tpoaGg+Pj5JSUmsgK8JAAAE/0lEQVR4nO2cYVubMBSFSSoOKRR1nbNTN/3/f3JtL1RCAzdpSwKX8350ltH3ueeE0mCSAAAAAAAAAAAAItErHfsUpkC63vxNY59EfNKsVAoi0myjFETUGpYuIl2XSkHEsRsg4hSKZYvoaFiqiDMNyxRh0aDU8+JEpFl1rmF5E2GdhuWJ6NWwLBG6X8OSRGh7NyytLAdCsSQRg6FYjggmFEsRoXMHDfJFOIRiCSJ07qhBtgid7Vw1SBahcw8NckU4d4NsEY4rhXQROn/x1SBRxAXTIFHEhRqkifBcKaSKuKgb5Im4OBSyROjiKg1K/RQhgg1Ftf63gInQBaPhMU9Xv8VPBNsNm0InyUr6RLALZpUdN0exIuY9ETp/ZaYhq/eIiZ4IvhuK01Y5wR2hCyYUm7y1Y1BsNNgF8xQKQqgIXTDdUGad/aMiRfh0Q4PAjuC7oTsNB8RNhMOCaX1HwkSw3fDY1tDeZy4qGg6fKVpvPX1qvzdBIlgNRjek72q7bouQEg22G97aodhr2M/HWt5EsN2wzdsa7o4/M0U8CRDBLphlboailiNsIthp2JyFwiZi7h2hiz/Db8BYMOtQ1P8iaCLYaVCWbrCLmHNHsAtmmdm6oUFKR7DTcL5gmsiIBtsN295uaCgFRIO/bmA1SOgIh24YDoVNxPyiwYbCGPmeaZi/CFaDMqbh18AvGhdaM4uG3/2GgWk4/u5sO4K/JWu8tWEN3Zs084kGfzG9dg2FRVvKTMR2KiL8umHFa+h2BPeKaYi4aTdYXzOLjvALBdsNVhHp9DtCFw/Dp7j17IYGr+UzekfoxOd+g1M32EVwr1xHFaET7u6T8Y22aygIv46IKYLtBuMGvdc0HDA/kUy3LNluKK/S4BmNaB3BdoNxZ/oCDZ0bNxPtCFbDdaEgysl3BBsKv753OsoEL7F1wl03XB0KovLqiNATEaAbTkfyildYEQ4L5i1CUYswNwlMSIQuPplT91r5OcxtAozUx3AdwXeDV8vzVD5XpcE6gr2YLm8YiuaI0+uIQAtm55g+HRFkIthu8Pt45Erl1RHjiwjeDScRk+oI/rphhFDUR/a6IhlZRM5Mw9tI03DA7AjuyvJ51D/+yzyyP1YoiF3mEY2PUT3oYkjEOBX5zcY9GmP/Na6hr7XH64aGN9dofIy/YPR+XeG3ieMyHJfP8TUMPJ47ciiIncvy+bEaX0OfiLG7ocFcNawiQkwDiTjviBChsImwRCOUBtsTaH67WK5jN9wRYUJRi+gun147Fq4WUQzswgypodsRobqhYSAa4ULRiPiOht9GnltQ9YkIOw1HEacn2P22A9+GF/uqEV7DYSLe6D+PoKGnI2JoaDoifCiITXE2EXE00PIZcsE02XWjEUvDQcRnNA1KvZoi7qNp2ItIfR5BvTVmR0TfIlUTsBsaNuePykcn+DQcMJbPSRBFw74jJjYR7A7HsaiK2G/dQEfSoNT9pAYCHgh4IOCB8PHw+sDBPccgw8P9iiNdhIcf/BUwPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ8EPBDwQMADAQ/EbD0kX3euvDucufvRvv5OywP7rNE3Did+26MBAAAAAAAAAACx+A89v24vTG9TlgAAAABJRU5ErkJggg==" alt="">
    <a href="./nation.html"><p>Nation</p></a>
    <a href="./south.html"><p>South</p></a>
    <a href="./world.html"><p>World</p></a>
    <a href="entertain.html"><p>Entertainment</p></a>
    <a href="./education.html"><p>Jobs & Education</p></a>
    <a href="./sports.html"><p>Sports</p></a>
    <a href="./technology.html"><p>Technology</p></a>
    <a href="./lifestyle.html"><p>Lifestyle</p></a>
    <a href="./gallery.html"><p>Gallery</p></a>
    <div id="more">
        <ul>
        <li ><a href="/">More...⌵</a>
        <ul >
        <li><a href=""> <i class="fa-solid fa-stopwatch"></i>Business </a></li>
        <li><a href=""><i class="fa-solid fa-hourglass-half"></i>Opinion</a></li>
        <li><a href=""> <i class="fa-solid fa-people-group"></i>Sunday Chronicle</a></li>
        <li><a href=""> <i class="fa-solid fa-chart-column"></i>Featured</a></li>
        <li><a href=""><i class="fa-solid fa-handcuffs"></i>Hyderabad Chronicle</a></li>
        <li><a href=""><i class="fa-solid fa-road-barrier"></i>Science</a></li>
        <li><a href=""><i class="fa-solid fa-road-barrier"></i>Editor's pics</a></li>
        <li><a href=""><i class="fa-solid fa-road-barrier"></i>Just in</a></li>
        <li><a href=""><i class="fa-solid fa-road-barrier"></i>Astroguide</a></li>
        </ul>
        </li>
    </div>
</div>`;
}

export default navbar;
