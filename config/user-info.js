/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2021-01-23 15:38:31
 * @LastEditors: Rainy
 * @LastEditTime: 2021-06-19 22:25:49
 */

const userInfo = {
	loginUin: '',
	cookie: 'tvfe_boss_uuid=9e5b108a54eff00f; pgv_pvid=7442642530; fqm_pvqid=0306f14e-f80a-4786-91ac-756a4025adf0; ts_refer=cn.bing.com/; ts_uid=7124274562; RK=Ux7pXu2POG; ptcz=9e8079bb0f41e97223620c12919b16fbdb754c21dede138ed6694a9d62b8ae1b; pac_uid=1_187227583; eas_sid=i1A6P4b5B1a130V8J3l1l0Y624; uin=1187227583; tmeLoginType=2; wxopenid=; wxrefresh_token=; psrf_qqrefresh_token=7222F7AD199B38BC8FDFD0BB4DE17C94; wxunionid=; qm_keyst=Q_H_L_5uCr5iE1z0-bit1orQrf16C_6vvTqN_-gr997Xq9wtngT-ZcZZsVzuw; qm_keyst=Q_H_L_5uCr5iE1z0-bit1orQrf16C_6vvTqN_-gr997Xq9wtngT-ZcZZsVzuw; psrf_qqopenid=288F9ADC9A71D3C41E3911D67793721E; euin=oK6F7i-A7i4Foz**; qqmusic_key=Q_H_L_5uCr5iE1z0-bit1orQrf16C_6vvTqN_-gr997Xq9wtngT-ZcZZsVzuw; psrf_qqunionid=AFF24BC4789B5C21FA736A3C044AA405; psrf_qqaccess_token=EF863D7FC26BCC8BF871280E61DCE33E; psrf_musickey_createtime=1646298070; psrf_access_token_expiresAt=1654074070; fqm_sessionid=0e91c2b2-9c59-4d79-ba2d-32836cb9211e; pgv_info=ssid=s7168645024; ts_last=y.qq.com/n/ryqq/player',
}

const cookieList = userInfo.cookie.split('; ').map(_ => _.trim());

const cookieObject = {};
cookieList.filter(Boolean).forEach(_ => {
	if (_) {
		const [key, value = ''] = _.split('=');

		cookieObject[key] = value;
	}
});

module.exports = Object.assign(userInfo, {
	uin: userInfo.loginUin || cookieObject.uin,
	cookieList,
	cookieObject,
});
