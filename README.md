# Joomla-character counter to the meta description field(s) with a color indicator- Plugin
This plugin is executed only in backend and when users activate the plugin, it injects a JS script into the webpage which attaches the span just below the meta description text area, and count the chracters and change the color accordingly.


# Installation Process
1.Download the zip file or clone the plugin and compress joomla-color_indicator-plugin folder as zip file.
    There are two zip folder name as color_indicator and color_indicator_1.
    **for color_indicator_1,** 
      there is no separate file for js so after downloading the zip file do all the steps from 2 to 5.
    **for color_indicator,**
    in the color_indicator.php, in the line "$document->addScript('/**joomla-cms**/plugins/system/color_indicator/color_indicator.js');"
    change the joomla-cms as folder name, which you have saved in your folder, since I saved folder as joomla-cms and in general folder name is saved as joomla-cms,
    so I have used this, you can change accordingly the path, then do the steps drom 2 to 5.

2.Visit Joomla Extension Manager and install the zip file.

3.Go to System and click on Plugin under Manage section.

4.Search for System - color indicator plugin and activate it.

5.Demo Video for further steps: https://drive.google.com/file/d/1e8-ukfKHXj0FzimQOoQwZ9biF92EOsGo/view?usp=sharing.
