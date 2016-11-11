
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
  <script src=""""),_display_(/*10.17*/routes/*10.23*/.Assets.versioned("javascripts/data.txt")),format.raw/*10.64*/(""""></script>
  <link rel="stylesheet" href=""""),_display_(/*11.33*/routes/*11.39*/.Assets.versioned("stylesheets/styles.css")),format.raw/*11.82*/("""">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCO07-uXgg-uhv7t2VT8xCGMBbh0NjqTuU&libraries=visualization" async defer></script>

  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCO07-uXgg-uhv7t2VT8xCGMBbh0NjqTuU&libraries=visualization&callback=initMap" async defer></script> -->
</head>
<body>
  <!--NAVBAR-->
  <nav class="navbar-custom navbar-static-top">
    <div class="container-fluid container-custom">
      <div class="col-md-4 navbar-left"><p>HackHofstra</p></div>
      <!-- <div>
        <p class="navbar-right">Help</p>
      </div> -->
    </div>
  </nav>
  <br />
  <div class="container-fluid">
    <!--MAP -->
    <div class="col-md-8 map-div" id="map"></div>

    <!--INFO PANEL -->
    <div class="col-md-4 pull-right info-panel">
      <div class="header-custom">
        <h3>Find a Location</h3>
      </div>
      <div class="bordered">
        <select class="form-control" id="location-selector">
          <option>Rockefeller Center</option>
          <option>Times Square</option>
          <option>Trump Tower</option>
          <option>Lincoln Center</option>
        </select>
      </div>
      <br />

      <div class="header-custom-green bordered">
        <h3 class="hoverable" data-toggle="collapse" data-target="#criteria">Modify Criteria</h3>
      </div>
      <div id="criteria" class="collapse">
        <br />
        <form class="form-custom">
          <div class="col-md-6">
            <p>Crime</p>
            <div class="radio">
              <label><input class="mycheckbox" type="radio" name="crime" value="positive" >Positive</label>
            </div>
            <div class="radio">
              <label><input class="mycheckbox" type="radio" name="crime" value="negative" checked>Negative</label>
            </div>
          </div>

          <div class="col-md-6">
            <p>Recycling</p>
            <div class="radio">
              <label><input class="mycheckbox" type="radio" name="recycling" value="1" checked>Positive</label>
            </div>
            <div class="radio">
              <label><input class="mycheckbox" type="radio" name="recycling" value="0">Negative</label>
            </div>
          </div>

          <button id="btn_criteria">Show on Map</button>
        </form>
      </div>
      <br />
      <!-- <div class="header-custom-green bordered">
        <h3 class="hoverable" data-toggle="collapse" data-target="#div_positive">Positive</h3>
      </div>
      <div id="div_positive" class="collapse">
        <table id="table_positive" class="table-custom">
          <tr><td>Low Crime<td></tr>
        </table>
      </div>
      <br />
      <div class="header-custom-red bordered">
        <h3 class="hoverable" data-toggle="collapse" data-target="#div_negative">Negative</h3>
      </div>
      <div id="div_negative" class="collapse">
        <table id="table_negative" class="table-custom">
          <tr><td>High Traffic</td></tr>
        </table>
      </div>
      <br /> -->

      <!--FILTERS-->
      <div class="header-custom-tertiary bordered">
        <h3 class="hoverable" data-toggle="collapse" data-target="#filters">NYC Crime</h3>
        <!-- <button data-toggle="collapse" data-target="#filters">Hello</button> -->
      </div>
      <div id="filters" class="collapse">
        <div class="form-custom form-inline">
          <form>
            <div class="header-secondary">
              <p>By Year</p>
            </div>
              <label>From:</label>
              <select class="form-control" id="year-from-selector">
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
              </select>

              <label>To:</label>
              <select class="form-control" id="year-to-selector">
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
              </select>

              <br />
              <br />
              <div class="header-secondary">
                <p>By Borough</p>
              </div>

              <div class="checkbox">
                <label><input class="mycheckbox" type="checkbox" name="borough" value="MANHATTAN" checked>Manhattan</label>
              </div>
              <div class="checkbox">
                <label><input class="mycheckbox" type="checkbox" name="borough" value="QUEENS">Queens</label>
              </div>
              <div class="checkbox">
                <label><input class="mycheckbox" type="checkbox" name="borough" value="BROOKLYN">Brooklyn</label>
              </div>
              <div class="checkbox">
                <label><input class="mycheckbox" type="checkbox" name="borough" value="BRONX">Bronx</label>
              </div>
              <div class="checkbox">
                <label><input class="mycheckbox" type="checkbox" name="borough" value="STATENISLAND">Staten Island</label>
              </div>

              <br />
              <button id="btn_year">Update</button>
          </form>
        </div>
      </div>
      <!--*END FILTERS*-->
      <div class="small=text">
        <br />
        <p>Statistics obtained from NYC OpenData. Visit https://data.cityofnewyork.us/ for more information.</p>
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
                  DATE: Fri Nov 11 07:11:49 EST 2016
                  SOURCE: C:/Users/Jennifer/Files/Amy/HackHofstra/app/views/index.scala.html
                  HASH: c0d201580594acf872b4e8ed13da3a41d75dea43
                  MATRIX: 609->0|684->49|698->55|770->107|1242->553|1256->559|1321->604|1376->633|1390->639|1454->683|1510->712|1525->718|1587->759|1659->804|1674->810|1738->853
                  LINES: 25->1|28->4|28->4|28->4|32->8|32->8|32->8|33->9|33->9|33->9|34->10|34->10|34->10|35->11|35->11|35->11
                  -- GENERATED --
              */
          