import moment from "moment-timezone";
export const numberRegex = /^\d+\.?\d*$/;
export const countryCodeRegex = /^\+\d+$/;
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const militaryTimeRegex = /(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23):?(0|1|2|3|4|5)\d/;

export const getLinkRegexExpression = () => {
	const linkReg = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
		"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
		"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
		"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
		"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
		"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator
	return linkReg;
}

export const isNumber = (value) => {
	return numberRegex.test(value);
};

export const isCountryCodeValid = (value) => {
	return countryCodeRegex.test(value);
};

export const isEmailValid = (email) => {
	const reg = new RegExp(emailRegex);
	return reg.test(email) ? true : false;
};

export const isPasswordValid = (value) => {
	if (value && value.length > 8) {
		return true;
	} else {
		return false;
	}
};

export const isMilitaryTime = (string) => {
    if (!string) {
        return true;
    }

    return militaryTimeRegex.test(
        string
    );
}

//Date is on following form: YYYY-MM-DD
export const isCorrectDate = (string) => {
    let isCorrect = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(
        string
    );
    return isCorrect;
}

export const isLink = (value, strIncludes) => {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
		"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
		"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
		"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
		"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
		"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator

	
	let tested = !!pattern.test(value);
	
	if(tested && strIncludes) {
		tested = value.includes(strIncludes);
	}

	return tested;
};

export const getCurrentTimeByTimezone = (timeZone) => {
    if (timeZone) {
        let time = moment().tz(timeZone ? timeZone : "Europe/London");
        let currentDate = moment(time).format("DD-MM-YYYY HH:mm");
        return { time, currentDate };
    }
    return { time: null, currentDate: 'No data' };
}