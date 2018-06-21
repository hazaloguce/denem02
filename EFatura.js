sap.ui.define([	
	"inoart/core/Agent",
	"inoart/core/ModelManager",
	"inoart/core/Constants",
	"inoart/core/Utilities",
	"model/ModelConfig"
], function(Agent, ModelManager, Constants, Util, ModelConfig) {
	"use strict";

	var EFatura = Agent.extend("model.yf.EFatura", {

		constructor: function(sId) {
			
			Agent.apply(this, arguments);

			this.sServiceName = "ZYF_UI_EFATURA_SRV";

			this.oModelConfig = new ModelConfig();

			this.oModelManager = new ModelManager(this);

		},   
 
		getEFaturaPdf: function(sEFaturaNo) {

			return this.oModelManager.sServiceUrl + "/EFaturaPdfCiktiSet(EFaturaNo='" + sEFaturaNo + "')/$value";
		}       
		
	});

	return EFatura;

});
			
							