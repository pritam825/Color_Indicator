<?php
defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Factory;

/**
 * Create and or render an article table of contents.
 *
 * @since  4.0
 */
class plgSystemcolor_indicator extends CMSPlugin
{

    public function __construct($name, array $arguments = array())
    {

        parent::__construct($name, $arguments);
    }

    public function onAfterDispatch()
    {
        //echo 'compile';
        //only going to run these in the backend for now

        $app = JFactory::getApplication();
        $isAdmin = $app->isClient('administrator');

        if ($isAdmin) {
            $document = Factory::getDocument();
            /*
            X/plugins/system/color_indicator/color_indicator.js

            X is the folder name ,since here I have saved the folder as "joomla-cms", and in general it's saved in joomla-cms 

            */
            $document->addScript('/joomla-cms/plugins/system/color_indicator/color_indicator.js');
        }

    }

}