var Crown = {
  Common: {},
  Components: {}
};



Crown.Common.Cookies = function (jQuery) {
  'use strict';

  return {
    createCookie: function(name, value, days) {
      var cookieEvent = "";
      if (days == Infinity) {
        var expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        cookieEvent = name + "Create";
      }
      else {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
      }

      document.cookie = name +"="+ value + expires + "; path=/";
    },
    readCookie: function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    },
    eraseCookie: function(name) {
      Crown.Common.Cookies.createCookie(name,"",-1);
    }
  }
}(jQuery);
Crown.Common.Helper = function (jQuery) {
  'use strict';

  return {
    //based on a lower level answer at http://stackoverflow.com/questions/31757852/how-can-i-detect-internet-explorer-ie-and-microsoft-edge-using-javascript
    isMicrosoftBrowser: function() {
        if (navigator.appName === 'Microsoft Internet Explorer'){
          return true; // IE
        }
        else if (navigator.appName === 'Netscape'){
            if ((navigator.appVersion.indexOf('Trident') > -1) || (navigator.appVersion.indexOf('Edge') > -1)) {
                return true; //EDGE
            }
        }

        return false;
    },
    checkReferrer: function() {
        // http://stackoverflow.com/questions/220149/how-do-i-access-the-http-request-header-fields-via-javascript
        var ref = document.referrer;
        if ((ref.substr(ref.length - 21) == "region_selector2.html") || (ref.indexOf("www2") > 0) || (ref.indexOf("crownbrazil") > 0)|| (ref.indexOf("crownlift") > 0)  || (ref.indexOf("crownforklifts") > 0) || (ref.indexOf("crownnewzealand") > 0)) {
            Crown.Common.Cookies.eraseCookie("crownlocation");
        }
    },
    //based on suggested solution on http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
    delay: function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    },
    fullQueryString: function() {
        var url = window.location.href;

        return (Crown.Common.Helper.queryStringSupplied()) ? url.substring(url.indexOf("?") + 1) : "";
    },
    getQueryStringParamsFromString: function(qString, sParam) {
        if (qString != undefined) {
            var sURLVariables = qString.split("&");
            if (sURLVariables != undefined) {
                for (var i = 0; i < sURLVariables.length; i++)
                {
                    var sParameterName = sURLVariables[i].split("=");
                    if (sParameterName[0] == sParam)
                    {
                        return sParameterName[1].replace("%20", " ").trim();
                    }
                }
            }
        }
        return "";
    },
    //pulled from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    getParameterByName: function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    queryStringSupplied: function() {
        return (window.location.href.indexOf("?") !== -1) ? true : false;
    },
    redirectPage: function(url) {window.location.href = url;},
    //http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
    replaceAll: function(find, replace, str) {
        if (str != undefined) {
            return str.replace(new RegExp(find, 'g'), replace);
        }
        else {
            return "";
        }
    },
      //Checks whether the device is mobile or not
      isMobile: function () {
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
              return true;
          }
         return false;
      }
  };
}(jQuery);

//fix error when attempting to do a trim in IE8 - per http://stackoverflow.com/questions/2308134/trim-in-javascript-not-working-in-ie
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  }
}

/*
 * Copyright Crown Equipment Corporation. All rights reserved.
 */
function initStickyNav() {
    var $stickynav = jQuery('.container-stickynav'),
        $wrapper_stickynav = jQuery('.wrapper-stickynav');
    //jQuery(window).resize(function(){
    //  var tallest_item_height = -1;
    //  for (var i = 0; i < $wrapper_stickynav.find('.btn-stickynav').length; i ++) {
    //    tallest_item_height = tallest_item_height < $wrapper_stickynav.find('.btn-stickynav:eq(' + i + ')').height() ? $wrapper_stickynav.find('.btn-stickynav:eq(' + i + ')').height() : tallest_item_height;
    //  }
    //  $wrapper_stickynav.find('.btn-stickynav, .container-cta').height(tallest_item_height);
    //});

    $stickynav.affix({
        offset: {
            top: $stickynav.offset().top + 1
        }
    }).find('.btn-stickynav').on('click', function(e) {
        // intercept clicks and scroll to position, otherise the sticky nav would cover the top of the content
        var target = jQuery(jQuery(this).attr('href'));
        jQuery('html,body').animate({
            scrollTop: target.offset().top - $stickynav.outerHeight()
        }, .8 * 1000);
        return false;
    });

    if(Crown.Common.Helper.isMobile()) {
        jQuery('body').scrollspy({
            target: '.container-stickynav-parent',
            offset: $stickynav.outerHeight() + 150
        });
    }
    else {
        jQuery('body').scrollspy({
            target: '.container-stickynav-parent',
            offset: $stickynav.outerHeight() + 50
        });
    }

}
window.initStickyNav = initStickyNav;

Crown.Components.ServiceManual = function (jQuery) {
    'use strict';

    return {
        clearModelField: function(modelField) {
            modelField.find("option").remove().end();
        },
            createTableRow: function(values, rowCtr, heading) {
                var vSplit = values.split(":");
                var tr = jQuery(document.createElement("tr"));
                if((rowCtr % 2) == 0) {
                    tr.attr("class", "alternate");
                }
                var tdLeft = jQuery(document.createElement("td"));
                tdLeft.append(vSplit[0]);
                tr.append(tdLeft);

                var tdMiddle = jQuery(document.createElement("td"));

                if((vSplit[1] == "n/a" && heading == "operatorManual")
                        || (vSplit[1] == "n/a" && heading == "partsServiceMaster")) {
                    tdMiddle.append("Not Available");
                }
                else if(vSplit[1] == "n/a" && heading == "safetyLabels") {
                    tdMiddle.append("Call Us");
                }
                else {
                    tdMiddle.append(vSplit[1]);
                }
                tr.append(tdMiddle);

                var tdRight = jQuery(document.createElement("td"));
                if(vSplit[2] == "n/a") {
                    tdRight.append("$0.00");
                }
                else {
                    tdRight.append("$"+vSplit[2]);
                }
                tr.append(tdRight);

                return tr;
            },
        getRequest: function(formId, currentUrl) {
             var postRequest = Crown.Components.ContactForm.createPostRequest("#" + formId + "-form");
             jQuery.ajax({
                 type: "GET",
                 url:  currentUrl + ".send",
                 data: postRequest,
                 dataType: 'json'
             }).done(function(response) {
                 var responseSplit = JSON.parse(response);
                 if (responseSplit[0].type == "truckList") {
                     Crown.Components.ServiceManual.processTruckList(responseSplit, jQuery("#model"));
                 }
                 else if (responseSplit[0].type == "truckValues") {
                     Crown.Components.ServiceManual.populateLocationInformation(responseSplit, jQuery("#" + formId + "-form"));
                     Crown.Components.ServiceManual.processValueList(responseSplit, jQuery("#" + formId + "-form"));
                 }
             }).fail(function (xhr, status, errorMsg) {
                 alert("Error while attempting to access Service Manuals: " + status);
                 (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
             });
        },
        populateLocationInformation: function(responseSplit, htmlForm) {
            jQuery("#locationInfo").removeClass("hidden");

            jQuery("#locationInfo").empty();

            var locationText = Crown.Common.Helper.replaceAll("LINE_BREAK", "<br />", responseSplit[1].location);
            locationText = Crown.Common.Helper.replaceAll("STR_START", "<strong>", locationText);
            locationText = Crown.Common.Helper.replaceAll("STR_END", "</strong>", locationText);

            var howToOrder = jQuery( document.createElement("h5") );
            howToOrder = howToOrder.append("How To Order");
            jQuery("#locationInfo").append(howToOrder);

            var locationPara = jQuery( document.createElement("p") );
            locationPara = locationPara.append(locationText);
            jQuery("#locationInfo").append(locationPara);

            var searchAgain = jQuery( document.createElement("button") );
            searchAgain.append("Search Again?");
            searchAgain.attr("id", "searchAgain");
            searchAgain.attr("class", "btn btn-orange btn-rounded btn-block");
            searchAgain.attr("type", "submit");
            jQuery("#locationInfo").append(searchAgain);

            jQuery("#searchAgain").click(function(event) {
                (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

                jQuery("#manualListing").addClass("hidden");
                jQuery("#locationInfo").addClass("hidden");
                jQuery(htmlForm).removeClass("hidden");
            });
        },
        processTruckList: function(responseSplit, modelField) {
            modelField.append('<option value="">Select A Model</option>');
            for(var ctr = 1; ctr < responseSplit.length; ctr++) {
                modelField.append('<option value="' + responseSplit[ctr].truckName + '">' + responseSplit[ctr].truckName + '</option>');
            }
        },
        processValueList: function(responseSplit, htmlForm) {
            jQuery("#manualListing").removeClass("hidden");
            htmlForm.addClass("hidden");
            $("#resultHeaderString").text($("#model").val() + " Series Results:");

            jQuery("#operatorManual").find("tr:gt(0)").remove();
            jQuery("#serviceManual").find("tr:gt(0)").remove();
            jQuery("#safetyLabels").find("tr:gt(0)").remove();

            var modelYearValue;
            var responseSplitStart;
            if (responseSplit[2] != undefined) {
                responseSplitStart = 2;
            }
            else {
                responseSplitStart = 1;
            }

            for(var ctr1 = responseSplitStart; ctr1 < responseSplit.length; ctr1++) {
                var results = responseSplit[ctr1].XML_Results.split("|");

                for(var ctr2 = 0; ctr2 < results.length; ctr2++) {
                    var versionSplit = results[ctr2].split(";");

                    for(var ctr3 = 0; ctr3 < versionSplit.length; ctr3++) {
                        var nameSplit = versionSplit[ctr3].split(",");

                        switch(nameSplit[0]) {
                            case "operatorManual":
                                jQuery("#operatorManual").append(Crown.Components.ServiceManual.createTableRow(nameSplit[1], ctr2,"operatorManual"));
                                break;
                            case "partsServiceMaster":
                                jQuery("#serviceManual").append(Crown.Components.ServiceManual.createTableRow(nameSplit[1], ctr2,"partsServiceMaster"));
                                break;
                            case "safetyLabels":
                                jQuery("#safetyLabels").append(Crown.Components.ServiceManual.createTableRow(nameSplit[1], ctr2,"safetyLabels"));
                                break;
                        }
                    }
                }
            }
        }
    }
}(jQuery);

/*
Crown.Components.RichText = function () {

  'use strict';

  var scene7serverUrl = "http://crown.scene7.com";

  var eCatlog = new s7viewers.eCatalogViewer();
  eCatlog.setParam("serverurl", scene7serverUrl + "/is/image/");
  eCatlog.setParam("emailurl", scene7serverUrl + "/s7/emailFriend");
  eCatlog.setParam("contenturl", scene7serverUrl + "/skins/");
  eCatlog.setParam("config", "Scene7SharedAssets/Universal_HTML5_eCatalog_Adv");
  eCatlog.setContainerId("ecatalog");

  var currentAsset;

  return {
    initECatalogLinks: function (jQuery) {
      jQuery('.btn-launch-ecatalog-modal').each(function () {
        var $this = jQuery(this),
            asset = 'crown/' + $this.data('ecatalog-name'),
            $modalTarget = jQuery($this.data('target')),
            loadMedia = function (e) {
              if (currentAsset !== asset) {
                eCatlog.setAsset(asset);
                currentAsset = asset;
              }
              if (!eCatlog.initCalled) {
                eCatlog.init();
              }
              $modalTarget.addClass('modal-image');
              $modalTarget.on('hidden.bs.modal', function (e) {
                jQuery(this).removeClass('modal-image');
              });
            };
        $this.on('click', function (e) {
          e.preventDefault();
          loadMedia(e);
        });
      });
    }
  };

}();

Crown.Components.RichText.initECatalogLinks(jQuery);
*/

Crown.Components.LocaleSelectorHeader = function (jQuery) {
    'use strict';

    return {
		redirectPage: function(alternateLink) {
			var slashIndex = alternateLink.indexOf("/", 1);
			var commonPageName = alternateLink.substring(0, slashIndex);
			slashIndex = alternateLink.lastIndexOf("/");
			var ctr = 0;
			var slashCount = 0;
			while (ctr < slashIndex) {
				if (alternateLink.substring(ctr, ctr) == "/") {
					slashCount += 1;
				}
				ctr += 1;
			}
			var currentPath = window.location.pathname;
			var replaceStart = currentPath.indexOf(commonPageName);
			var slashCount2 = 0;
			while ((ctr < currentPath.length) && (ctr < currentPath.indexOf(".")) && (slashCount2 <= slashCount)) {
				if (currentPath.substring(ctr, ctr) == "/") {
					slashCount2 += 1;
				}
				ctr += 1;
			}
			currentPath = currentPath.replace(currentPath.substring(replaceStart, ctr), alternateLink);
			Crown.Common.Helper.redirectPage(currentPath);
		}
    }
}
Crown.Components.LocaleSelector = function (jQuery) {
    'use strict';

    return {
        addRegion: function(component) {
            var currentEditable = component;
            jQuery.post(
                currentEditable.path + '/*',
                {
                    'sling:resourceType': 'global-web/components/content/localeselector/localeregion',
                    'jcr:primaryType':'nt:unstructured',
                    ':nameHint':'localeregion'
                },
                function (data) {
                    currentEditable.refreshSelf();
                }
            );
        },
        initSorting: function (uniqueId) {
            // make tabs sortable in edit mode
            $('#' + uniqueId + '-localeregion-list').each(function () {
                var $this = $(this);

                $this.sortable({
                    axis: 'y',
                    update: function (event, ui) {
                        // reorder tabs on back end on update
                        var $item = ui.item;
                        var name = $item.data('name');

                        var index = $($item).parent().children("li").index($item);

                        if (name) {
                            var path = $item.data('path') + '/' + name;
                            jQuery.post(path, { ':order': index });
                        }
                    }
                });
            });
        }
    };
}(jQuery);
Crown.Components.DealerLocatorInPage = function (jQuery) {
    'use strict';

    var addressCookieName = "crwn_dlPlaceAddr";

    return {
        submitForm: function(newURL) {
            var x;
            if (newURL.length > 0) {
                newURL = newURL + ".html?countryCode=US&latitude=0&longitude=0&postalCode=";
                var value = jQuery("#dealerLocatorSearchValue").val();
                if ((value.length >= 5) && (jQuery.isNumeric(value))) {
                    value = value.substring(0,5);
                    Crown.Common.Cookies.createCookie(addressCookieName, value, 1);
                    Crown.Common.Helper.redirectPage(newURL + value);
                }
                else { alert("Invalid Zip Code"); }
            }
            else {
                (typeof console != "undefined") ? console.log("INVALID URL: " + newURL) : x = 0;
            }
        }
    }
}(jQuery);
Crown.Components.DealerLocator = function (jQuery) {
    'use strict';

    return {
        searchStart: function(value, url) {
            var newURL = url;
            if (value.length > 0) {
                Crown.Components.GoogleMaps.geoCodeUnAutoCompletedAddress(value);
            }
            else { alert("Please provide something to search by"); }
        }
    }
}(jQuery);
Crown.Components.CookiePolicy = function (jQuery) {
    'use strict';

    var cookiePolicyCookieName = "cookiePolicy";
    var acceptedValue = "accepted";

    return {
        checkCookiePolicyStatus: function() {
            var cookiePolicy = Crown.Common.Cookies.readCookie(cookiePolicyCookieName);

            if (cookiePolicy != acceptedValue) {
                jQuery(".cookie-policy").addClass("show");
            	jQuery(".cookie-policy a.close-button").on("click", function() {
            		Crown.Common.Cookies.createCookie(cookiePolicyCookieName, acceptedValue, Infinity);
            		jQuery(".cookie-policy").removeClass("show");
            	});
            }
            else {
            	jQuery(".cookie-policy").removeClass("show");
            }
        }
	}
}(jQuery);
Crown.Components.ContactForm = function (jQuery) {
    'use strict';

    var optOutStartTrue = 'TRUE:', optOutStartFalse = 'FALSE:';
    var BREAK = '<br />';

    return {
        addToAddress: function(currentText, value) {
            if (value.trim().length > 0) {
                if (currentText.trim().length > 0) {
                    currentText += BREAK;
                }
                currentText += value;
            }

            return currentText;
        },
        addUncheckedCheckboxes: function(formId) {
            var checkboxList = jQuery('#'+ formId).find('input:checkbox');
            var formData = new FormData( document.getElementById(formId));

            var ctr = 0;
            //handle situation where IE and Edge don't support FormData methods other than append
            if(checkboxList !== null) {
                while (ctr < checkboxList.length) {
                    var chkBox = checkboxList[ctr];
                    if(chkBox !== null) {
                        var val = chkBox.value;
                        var name = chkBox.name;
                        if (!(val === null || name === null)) {
                            val = val.trim();
                            if ((val.length > 5) &&
                                (val.substring(0, 5) === optOutStartTrue) &&
                                (!(chkBox.checked))){
                                var formVal = val.replace(
                                    optOutStartTrue,optOutStartFalse);
                                formData.append(name, formVal);
                            }
                            ctr += 1;
                        }
                    }
                }
            }

            return formData;
        },
        createIndividualListItem: function(textName, textValue, selected) {
            var option = jQuery( document.createElement('option') );
            option.append(textName);
            option.attr('value',textValue);
            if (selected) {
                option.attr('selected','true');
            }

            return option;
        },
        createListItemsForSelect: function(selectBox, responseSplit, selection) {
            for(var ctr1 = 0; ctr1 < responseSplit.length; ctr1++) {
                var results = responseSplit[ctr1].XML_Results.split("|");

                for(var ctr2 = 0; ctr2 < results.length; ctr2++) {
                    var versionSplit = results[ctr2].split(';');

                    var textSplit = versionSplit[0].split(',');
                    if ((typeof versionSplit[1] !== 'undefined') && (versionSplit[1] !== null)) {
                        var valueSplit = versionSplit[1].split(',');

                        if (valueSplit[1] === selection) {
                            selectBox.append(Crown.Components.ContactForm.createIndividualListItem(textSplit[1], valueSplit[1], true));
                        }
                        else {
                            selectBox.append(Crown.Components.ContactForm.createIndividualListItem(textSplit[1], valueSplit[1], false));
                        }
                    }
                }
            }
        },
        createPostRequest: function(formId) {
			var fields = jQuery(formId).find('select, textarea, input').serializeArray();

			return fields;
		},
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
		endsWith: function(fullString, searchString, position) {
		    var subjectString = fullString.toString();
            if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
		},
		fileUploadProgress: function(xhr) {
		    if (xhr.lengthComputable) {
		        jQuery('progress').attr({value:xhr.loaded,max:xhr.total});
		    }
		},
		getLabelNameForField: function(fieldID) {
		    var label = jQuery("label[for='"+fieldID+"']");

		    return label[0].innerText.replace('*','').trim();
		},
        getQueryStringParams: function(sParam) {
            var sPageURL = window.location.search.substring(1);
            return Crown.Common.Helper.getQueryStringParamsFromString(sPageURL, sParam).replace('%20', ' ').trim();
        },
        //http://stackoverflow.com/questions/4006520/using-html5-file-uploads-with-ajax-and-jquery
        handleFormPost: function(formData, postURL, formSubmittedMessage, invalidFieldMessage) {
			jQuery('html, body, .modal').stop().animate({
					scrollTop: jQuery('#contact-form-content').offset().top
				}, 1500, 'easeInOutExpo');
			jQuery('.contact_loader').fadeIn();
			jQuery('.loader_cover').fadeIn();
			jQuery.ajax({
				type: 'POST',
				url:  postURL,
				xhr: function() {
				    var myXhr = jQuery.ajaxSettings.xhr();
                    if(myXhr.upload){ // Check if upload property exists
                        myXhr.upload.addEventListener('progress',Crown.Components.ContactForm.fileUploadProgress(myXhr), false); // For handling the progress of the upload
                    }
                    return myXhr;
				},
				data: formData,
				cache: false,
                contentType: false,
                processData: false
			}).done(function(response) {
				var errorSplit = JSON.parse(response);
				if (errorSplit.length === 0) {
                    if(!Crown.Common.Helper.isMobile()) {
                        jQuery('#contact-form-content').hide().after('<div id="contact-thank-you"><div/>');
                        jQuery('#contact-thank-you').append(formSubmittedMessage);
                    }
                    else{
                        alert($(formSubmittedMessage).text());
                        jQuery('#modal-contact-form').modal('hide');
                    }
                    jQuery('.contact_loader').fadeOut();
                    jQuery('.loader_cover').fadeOut();
                    
                    dataLayer.push({'event' : 'contactFormSubmission'});
				}
				else {
					jQuery('.contact_loader').fadeOut();
					jQuery('.loader_cover').fadeOut();
					var output = invalidFieldMessage + lineBreak;
					for(var ctr = 0; ctr < errorSplit.length; ctr++) {
						output += errorSplit[ctr].invalidinput + lineBreak;
					}
					alert(output);
				}
			}).fail(function (xhr, status, error) {
				(typeof console !== "undefined") ? console.error(xhr.responseText) : alert(xhr.responseText);
				var errorSplit = JSON.parse(xhr.responseText);
				if (errorSplit.length > 0) {
					var output = invalidFieldMessage + lineBreak;
					for(var ctr = 0; ctr < errorSplit.length; ctr++) {
						output += errorSplit[ctr].invalidinput + lineBreak;
					}
					alert(output);
				}
				else {
					alert("${contactform.defaultErrorMessage @ context='scriptString'}");
					(typeof console !== "undefined") ? console.error(xhr) : alert(xhr);
				}
				(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
			});
        },
        populateMultiSelectValue: function(controlName, value) {
            if ((value !== undefined) && (value.length > 0)) {
                var dataArray = value.split(',');
                jQuery(controlName).val(dataArray);
                jQuery(controlName).multiselect('refresh');
            }
        },
        populateSelectValue: function(controlName, value) {
            if ((value !== undefined) && (value.length > 0)) {
                jQuery(controlName).val(value);
            }
        },
        requiredFieldCheck: function(requiredText, pageLanguage) {
            var fields = jQuery('.ss-item-required').find('select, textarea, input').serializeArray();
            var fieldListing = '';
            var validForm = true;
            jQuery.each(fields, function(i, field) {
                if ((!field.value) || (field.value.trim() <= 0) || ((field.value.startsWith('(')) && (field.value.endsWith(')')))) {
                    if (fieldListing.length <= 0) {
                        fieldListing += requiredText + ': ' + lineBreak;
                    }
                    fieldListing += Crown.Components.ContactForm.getLabelNameForField(field.name) + lineBreak;
                    validForm = false;
                }
            });
            if (!validForm) {
                alert(fieldListing);
            }
            return validForm;
        },
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
        startsWith: function(fullString, searchString, position) {
            position = position || 0;
            return fullString.substr(position, searchString.length) === searchString;
        },
        supportAjaxUploadWithProgress: function() {
			return supportFileAPI() && supportAjaxUploadProgressEvents() && supportFormData();

			// Is the File API supported?
			function supportFileAPI() {
				var fi = document.createElement('INPUT');
				fi.type = 'file';
				return 'files' in fi;
			};

			// Are progress events supported?
			function supportAjaxUploadProgressEvents() {
				var xhr = new XMLHttpRequest();
				return !! (xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
			};

			// Is FormData supported?
			function supportFormData() {
				return !! window.FormData;
			}
		},
        updateControlName: function(component) {
            var dialog = component.findParentByType("dialog");
            var field = dialog.getField("./controlName");
            field.setValue(component.value.replace(" ", "").toLowerCase());
        },
        writeDealerAddress: function(result) {
            var address = "";
            if (result.address1.trim().length > 0) {
                Crown.Components.ContactForm.addToAddress(address, result.address1.trim());
                Crown.Components.ContactForm.addToAddress(address, result.address2.trim());
                Crown.Components.ContactForm.addToAddress(address, result.address3.trim());
                Crown.Components.ContactForm.addToAddress(address, result.address4.trim());
            }
            else {
                Crown.Components.ContactForm.addToAddress(address, result.mailingAddress1.trim());
                Crown.Components.ContactForm.addToAddress(address, result.mailingAddress2.trim());
                Crown.Components.ContactForm.addToAddress(address, result.mailingAddress3.trim());
                Crown.Components.ContactForm.addToAddress(address, result.mailingAddress4.trim());
            }

            return address;
        },
        writeDealerInfo: function() {
            jQuery("dealerNearYou").append("<p><strong>" + result.userFriendlyName + "</strong></p>");
            jQuery("dealerNearYou").append("<p>" + writeDealerAddress(result) + "</p>");
            jQuery("dealerNearYou").append("<p><strong>Call:</strong>" + result.phone + "</p>");
            jQuery("dealerNearYou").append("<p><strong>Fax:</strong>" + result.fax + "</p>");
            jQuery("dealerNearYou").append("<p><a><strong>Get Directions</strong></a></p>");
        }
    };
}(jQuery);

function initStickyFilter() {
    var $stickyfilter = jQuery(".container-stickyfilter"),
        $wrapper_stickyfilter = jQuery(".wrapper-stickyfilter"),
        $stickyfilter_placeholder = $wrapper_stickyfilter.find(".stickyfilter-placeholder");
    jQuery(window).resize(function() {
        var tallest_item_height = -1;
        for (var i = 0; i < $wrapper_stickyfilter.find(".btn-stickyfilter").length; i++) {
            tallest_item_height = tallest_item_height < $wrapper_stickyfilter.find(".btn-stickyfilter:eq(" + i + ") a").height() ? $wrapper_stickyfilter.find(".btn-stickyfilter:eq(" + i + ") a").height() : tallest_item_height;
        }
        $wrapper_stickyfilter.find(".btn-stickyfilter a").height(tallest_item_height);
    });

    $stickyfilter.affix({
        offset: {
            top: $stickyfilter.offset().top
        }
    }).on("affixed-top.bs.affix", function() {
        $stickyfilter_placeholder.addClass("hidden");
    }).on("affix.bs.affix", function() {
        $stickyfilter_placeholder.removeClass("hidden");
    });

    //initialize the View All button to be selected
    $stickyfilter.find(".btn-stickyfilter").each(function() {
        if ($(this).children().data("category") == "View All") {
            $(this).addClass("selected");
        }
    });
    $(".btn-stickyfilter a:empty").parent().remove();
    $(".btn-stickyfilter:first-child").addClass("selected").delay(100).queue(function() {
        $(this).trigger('click');
        $initLoad = false;
    });
}

$(document).ready(function() {
    $initLoad = true;
    $(".btn-stickyfilter a").click(function(event) {
        event.preventDefault();
    });    
    $(".btn-stickyfilter").click(function(event) {
        var $stickyfilter = jQuery('.container-stickyfilter');
        if ($initLoad == false) {
            jQuery('html,body').animate({
                scrollTop: $stickyfilter.offset().top
            }, .8 * 1000);
        }
        category = $(event.currentTarget).children("a").data("category");
        $(".container-stickyfilter").find(".btn-stickyfilter").each(function() {
            if ($(this).children().data("category") == category) {
                if ($(this).hasClass("selected")) {
                    // $(this).removeClass("selected");
                } else {
                    $(this).addClass("selected");
                }
            } else {
                $(this).removeClass("selected");
            }
        });

        $(".filterable-brick").each(function() {
            // debugger;
            if (category == "View All") {
                $(this).css({
                    "visibility": "",
                    "display": ""
                }).addClass("item");
                $(this).parent().masonry();
            } else if ($(this).find(".item-category").data("category") !== category) {
                if ($(this).css("display") != "none") {
                    $(this).css({
                        "visibility": "hidden",
                        "display": "none"
                    }).removeClass("item");
                    $(this).parent().masonry();
                }
            } else {
                $(this).css({
                    "visibility": "",
                    "display": ""
                }).addClass("item");
                $(this).parent().masonry();
            }
        });
        
        $('.js-masonry').trigger('layout');
        
    });


    // mobile select menu
    $(".container-stickyfilter select").on('change', function(event) {
        var $stickyfilter = jQuery('.container-stickyfilter');
        jQuery('html,body').animate({
            scrollTop: $stickyfilter.offset().top
        }, .8 * 1000);
        var category = $(this).find('option:selected').text();
        $(".container-stickyfilter").find("select option").each(function() {
            if ($(this).text() == category) {
                if ($(this).hasClass("selected")) {
                    $(this).removeClass("selected");
                } else {
                    $(this).addClass("selected");
                }
            } else {
                $(this).removeClass("selected");
            }
        });
        $(".filterable-brick").each(function() {
            if (category == "View All") {
                $(this).css({
                    "visibility": "",
                    "display": ""
                }).addClass("item");
                $(this).parent().masonry();
            } else if ($(this).find(".item-category").data("category") !== category) {
                if ($(this).css("display") != "none") {
                    //$(this).css({"visibility": "", "display": ""}).addClass("item");
                    //$(this).parent().masonry();
                    //} else {
                    $(this).css({
                        "visibility": "hidden",
                        "display": "none"
                    }).removeClass("item");
                    $(this).parent().masonry();
                }
            } else {
                $(this).css({
                    "visibility": "",
                    "display": ""
                }).addClass("item");
                $(this).parent().masonry();
            }
        });
    });

});
