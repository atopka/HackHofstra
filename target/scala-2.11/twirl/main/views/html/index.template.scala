
package views.html

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object index_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

class index extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.1*/("""<!DOCTYPE html>
<html>
<head>
  <script src=""""),_display_(/*4.17*/routes/*4.23*/.Assets.versioned("javascripts/jquery-3.1.1.min.js")),format.raw/*4.75*/(""""></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

  <script src=""""),_display_(/*8.17*/routes/*8.23*/.Assets.versioned("javascripts/maploader.js")),format.raw/*8.68*/(""""></script>
  <script src=""""),_display_(/*9.17*/routes/*9.23*/.Assets.versioned("javascripts/pageload.js")),format.raw/*9.67*/(""""></script>
  <link rel="stylesheet" href=""""),_display_(/*10.33*/routes/*10.39*/.Assets.versioned("stylesheets/styles.css")),format.raw/*10.82*/("""">

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCO07-uXgg-uhv7t2VT8xCGMBbh0NjqTuU&libraries=visualization&callback=initMap" async defer></script>
</head>
<body>
  <!--NAVBAR-->
  <!-- <nav class="navbar-custom">
  </nav> -->

  <div class="container">
    <!--MAP -->
    <div class="col-md-8 map-div" id="map">
      <p>map</p>
    </div>

    <!--INFO PANEL -->
    <div class="col-md-4 pull-right info-panel">
      <div>
        <h3>Positive</h3>
      </div>
      <div>
        <h3>Negative</h3>
      </div>
    </div>


  </div>
</body>
</html>
"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


}

/**/
object index extends index_Scope0.index
              /*
                  -- GENERATED --
                  DATE: Thu Nov 10 23:03:42 EST 2016
                  SOURCE: C:/Users/Taylor/Programs/HackHofstra/app/views/index.scala.html
                  HASH: fff5b0dd453d9eab68ccc3be9890466b6a3f2e5a
                  MATRIX: 609->0|684->49|698->55|770->107|1242->553|1256->559|1321->604|1376->633|1390->639|1454->683|1526->728|1541->734|1605->777
                  LINES: 25->1|28->4|28->4|28->4|32->8|32->8|32->8|33->9|33->9|33->9|34->10|34->10|34->10
                  -- GENERATED --
              */
          