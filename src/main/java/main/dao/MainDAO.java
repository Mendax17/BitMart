package main.dao;

import java.util.List;
import java.util.Map;

import main.bean.CartDTO;
import main.bean.CommentDTO;
import main.bean.FaqDTO;
import main.bean.MainDTO;
import main.bean.NoticeDTO;
import main.bean.UserDTO;

public interface MainDAO {

	List<MainDTO> mainList();

	List<MainDTO> product_card();
	
	MainDTO product_detail(String seq);

	List<MainDTO> list(Map<Object, Object> map);

	List<MainDTO> oneday_product();

	String product_number();

	List<NoticeDTO> getNoticeList(); // 추가

	NoticeDTO getNoticeDetail(int id); // 추가

	UserDTO login(Map map);

	UserDTO check_login(Map map);

	List<CartDTO> cart_list(Map map);

	public void cart_delete(Map map);

	public void cart_num_edit(Map map);

	CartDTO check_cart(Map map);

	public void cart_insert(Map map);
	
	List<FaqDTO> getFaqList(); // 추가

	UserDTO findId(Map map);

	UserDTO checkUserId(String id);

	UserDTO checkEmail(String email);

	void signUp(Map<String, Object> map);

	List<CommentDTO> comment_list(Map map);

	String comment_count(Map map);

	List<CartDTO> order_list(Map map);
	
	public void views_update(Map map);

	
	UserDTO checkName(String name);
	
	UserDTO findPwd(Map map);
	
	public void createReview(Map<String, Object> requestData);

    public void delivery_insert(Map<String, String> map);
    
}