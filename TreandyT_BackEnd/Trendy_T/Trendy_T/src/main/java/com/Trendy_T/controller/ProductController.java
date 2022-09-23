package com.Trendy_T.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Trendy_T.Entity.Address;
import com.Trendy_T.Entity.Product;
import com.Trendy_T.Entity.ProductImage;
import com.Trendy_T.Entity.ProductType;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.Massage;
import com.Trendy_T.pojo.Delivery_Details;
import com.Trendy_T.pojo.ProductInfo;
import com.Trendy_T.pojo.UserInfo;
import com.Trendy_T.repositories.ProductImageRepository;
import com.Trendy_T.repositories.ProductRepository;
import com.Trendy_T.repositories.ProductTypeRepository;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
	
	@Autowired
	ProductRepository prepo;
	@Autowired
	ProductTypeRepository ptrepo;
	
	@Autowired
	ProductImageRepository pirepo;
	@RequestMapping(method = RequestMethod.POST ,value = "/insert")	
	public Massage addProduct(@RequestBody ProductInfo product)
	{
			
			ProductImage pi=new ProductImage(product.getImage_front(),product.getImage_back(),product.getImage_left(),product.getImage_right());
			pirepo.save(pi);
			ProductType pt=new ProductType(product.getColor(),product.getMaterial(),product.getSleeve(),product.getNeck_type(),product.getSize());
			ptrepo.save(pt);
			Product pr=new Product(product.getPrice(),product.getQuantity(),product.getIscustomizable(),pt,pi);
			System.out.println(product.getColor());
			prepo.save(pr);
			return new Massage("ok");
			
				
			
	}
	/*@PostMapping(path = "/insertimage")
	public  Massage addProductImage(@RequestParam(value = "file", required = false) MultipartFile file) throws IOException 
	{
		
		String filename =StringUtils.cleanPath(file.getOriginalFilename());
		ProductImage prod=new ProductImage();
		//prod.setImage_front(filename);
		try {
			prod.setImage_front(file.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println();
		//prod.setUploadTime(new Date());
		//pirepo.save(prod);
		//ra.addFlashAttribute("message", "The file has been Uploaded");
		
		return  new Massage("ok");
	}*/
	@RequestMapping(method = RequestMethod.PUT ,value = "/update")	
	public Massage updateProduct(@RequestBody ProductInfo product )
	{
			ProductImage pi=new ProductImage(product.getImage_front(),product.getImage_back(),product.getImage_left(),product.getImage_right());
			pirepo.save(pi);
			Product pr=new Product();
			pr=prepo.findById(product.getProductid()).orElseThrow();
			pr.setPrice(product.getPrice());
			pr.setQuantity(product.getQuantity());
			prepo.save(pr);
			ProductType pt=pr.getProducttype_id();
			pt=ptrepo.findById(pt.getproducttype_id()).orElseThrow();
			pt.setColor(product.getColor());
			pt.setMaterial(product.getMaterial());
			pt.setSleeve(product.getSleeve());
			pt.setNeck_type(product.getNeck_type());
			pt.setSize(product.getSize());
			ptrepo.save(pt);
			return new Massage("ok");
			
				
			
	}
	@GetMapping("/findallproducts")
	public List<ProductInfo> products()
	{
		List<Product> productList=prepo.findAll();
		List<ProductType> productTyeList=ptrepo.findAll();
		List<ProductImage> productImageList=pirepo.findAll();
		
		List<ProductInfo> ProdList=new ArrayList<ProductInfo>();
		for(Product p:productList)
		{
			ProductInfo produInfoItem=new ProductInfo();
			ProductType productTypeitem=productTyeList.stream().filter(c-> c.getproducttype_id()==p.getProducttype_id().getproducttype_id()).collect(Collectors.toList()).get(0);
			produInfoItem.setProductid(p.getProduct_id());
			produInfoItem.setPrice(p.getPrice());
			produInfoItem.setQuantity(p.getQuantity());
			produInfoItem.setColor(productTypeitem.getColor());
			produInfoItem.setMaterial(productTypeitem.getMaterial());
			produInfoItem.setSleeve(productTypeitem.getSleeve());
			produInfoItem.setNeck_type(productTypeitem.getNeck_type());
			produInfoItem.setSize(productTypeitem.getSize());
			ProductImage productImageitem=productImageList.stream().filter(c-> c.getProductimage_id()==p.getProductimage_id().getProductimage_id()).collect(Collectors.toList()).get(0);
			produInfoItem.setImage_front(productImageitem.getImage_front());
			produInfoItem.setImage_back(productImageitem.getImage_back());
			produInfoItem.setImage_left(productImageitem.getImage_left());
			produInfoItem.setImage_right(productImageitem.getImage_right());
			
			ProdList.add(produInfoItem);
			
		}
		return ProdList;
		
	}
	
	@RequestMapping(method = RequestMethod.DELETE ,value = "/delete")	
	public Massage DeleteProduct(@RequestBody ProductInfo product )
	{
			
			Product pr=new Product();
			pr=prepo.findById(product.getProductid()).orElseThrow();
			ProductType pt=pr.getProducttype_id();
			pt=ptrepo.findById(pt.getproducttype_id()).orElseThrow();
			ptrepo.delete(pt);
			prepo.delete(pr);
			return new Massage("deleted");
			
	
	}
	

}
